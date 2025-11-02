#!/usr/bin/env python3
"""Fetch meta description or first <p> from each URL for entries 13-32 and update data/reviews.json

Usage: python3 scripts/extract_excerpts.py
"""
import json
import os
import re
import sys
from html import unescape
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'reviews.json')


def fetch(url, timeout=15):
    headers = {
        'User-Agent': 'Mozilla/5.0 (compatible; excerpt-bot/1.0; +https://github.com)'
    }
    req = Request(url, headers=headers)
    try:
        with urlopen(req, timeout=timeout) as resp:
            charset = resp.headers.get_content_charset() or 'utf-8'
            body = resp.read().decode(charset, errors='ignore')
            return body
    except (HTTPError, URLError) as e:
        print(f"Failed to fetch {url}: {e}")
        return None


def extract_meta_description(html):
    m = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']+)["\']', html, re.I)
    if m:
        return unescape(m.group(1)).strip()
    m2 = re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+name=["\']description["\']', html, re.I)
    if m2:
        return unescape(m2.group(1)).strip()
    # og:description
    m3 = re.search(r'<meta[^>]+property=["\']og:description["\'][^>]+content=["\']([^"\']+)["\']', html, re.I)
    if m3:
        return unescape(m3.group(1)).strip()
    return None


def extract_first_p(html):
    # remove script/style
    cleaned = re.sub(r'<(script|style)[^>]*>.*?</\1>', ' ', html, flags=re.I|re.S)
    # find first non-empty <p>...</p>
    for m in re.finditer(r'<p[^>]*>(.*?)</p>', cleaned, re.I|re.S):
        text = re.sub(r'<[^>]+>', ' ', m.group(1))
        text = re.sub(r'\s+', ' ', text).strip()
        if len(text) > 30:
            return unescape(text)
    # fallback: find first longer text block
    text_blocks = re.findall(r'>([^<>]{60,})<', cleaned)
    if text_blocks:
        return unescape(re.sub(r'\s+', ' ', text_blocks[0]).strip())
    return None


def make_excerpt(text, max_chars=320):
    if not text:
        return None
    text = text.strip()
    if len(text) <= max_chars:
        return text
    # cut at sentence boundary if possible
    m = re.match(r'(.{0,%d}?[\.\!?])(\s|$)' % (max_chars-1), text)
    if m:
        return m.group(1).strip()
    return text[:max_chars].rsplit(' ', 1)[0].strip() + '...'


def main():
    print('Loading', DATA_PATH)
    with open(DATA_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)

    start = 12  # zero-based index for card 13
    end = 32    # exclusive index for card 32 -> 32 means up to index 31
    updated = 0
    for i in range(start, end):
        if i >= len(data):
            print(f'Index {i} out of range, skipping')
            continue
        entry = data[i]
        url = entry.get('url')
        title = entry.get('title')
        print(f'[{i+1}] {title} -> {url}')
        if not url:
            print('  no url, skipping')
            continue
        html = fetch(url)
        if not html:
            print('  fetch failed, skipping')
            continue
        desc = extract_meta_description(html)
        if desc:
            excerpt = make_excerpt(desc)
            print('  got meta description')
        else:
            p = extract_first_p(html)
            excerpt = make_excerpt(p) if p else None
            print('  used first <p>' if p else '  no paragraph found')
        if excerpt:
            entry['excerpt'] = excerpt
            updated += 1
            print('  set excerpt:', excerpt[:80])
        else:
            print('  could not extract excerpt')

    if updated:
        print(f'Updating {DATA_PATH} with {updated} new excerpts')
        with open(DATA_PATH, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    else:
        print('No updates made')


if __name__ == '__main__':
    main()
