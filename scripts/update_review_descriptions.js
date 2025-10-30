const fs = require('fs')
const path = require('path')

const DATA = path.join(__dirname, '..', 'data', 'reviews.json')

const updates = {
  "Dragon (Tamil)": "Dragon: I remembered Clayton Christensen’s moral book for high flying MBAs",
  "Fandry (Marati)": "Fandry: A riveting tale on the life and love of a Dalit teenager",
  "Viduthalai (Tamil)": "விடுதலை. அருமையான தலைப்பு. அருமையான படம்.",
  "Badhaai Ho (Hindi)": "Badhaai Ho: Storytelling at its hilarious best",
  "Pariyerum Perumal (Tamil)": "தமிழ் சினிமா ‘மாரி’ வருகிறது — பரியேறும் பெருமாள் விமர்சனம்",
  "Newton (Hindi)": "Newton — Movie Review. It is like a Virat Kohli ton - It’s…",
  "Merkku Thodarchi Malai (Tamil)": "Merkku Thodarchi Malai: Review. I recently watched Merkku Thodarchi…",
  "Sairat (Marati)": "Sairat — Raw passion in a refreshing narrative",
  "Ner Konda Paarvai (Tamil)": "Ner Konda Paarvai: Entertainment + Education + Enlightenment for a society",
  "Baahubali (Telugu)": "Baahubali. SS Rajamouli arrives in the global…",
  "Super Deluxe (Tamil)": "Super Deluxe Movie Review: Thiagarajan Kumararaja is the CHOSEN ONE.",
  "Jailer (Tamil)": "The Jailer locks up everyone in his hearts",
  "Ponniyin Selvan (Tamil)": "Ponniyin Selvan — Maniratnam’s love for Godfather continues in this epic drama",
  "Jai Bhim (Tamil)": "Jai Bhim: A journey towards social justice",
  "96 (Tamil)": "’96 - It's like watching a river flow",
  "Vikram Vedha (Tamil)": "Vikram Vedha — A face lift to Indian films",
  "Kaakka Muttai (Tamil)": "Kaaka Muttai — A new benchmark. By Vijay Raju",
  "Ok Kanmani (Tamil)": "OK Kanmani — Movie Review. I watched OK Kanmani along with my wife…",
  "Darbar (Tamil)": "Darbar — A celebration of an ageing wine that tastes better and better",
  "Asuran (Tamil)": "Asuran: Old wine that starts with a high but fizzles out in the end",
  "Kaapaan (Tamil)": "Kaapaan: Cinema has become all about the ROI",
  "Peranbu (Tamil)": "Peranbu — A journey of compassion towards finding peace and harmony",
  "2.0 (Tamil)": "2.0: Shankar is the hero and the villain",
  "Padmavat (Hindi)": "Padmavat(i) — Rajputs could not have asked for a better tribute"
}

function main() {
  const raw = fs.readFileSync(DATA, 'utf8')
  let arr
  try {
    arr = JSON.parse(raw)
  } catch (err) {
    console.error('Failed to parse', DATA, err.message)
    process.exit(1)
  }

  let changed = 0
  const out = arr.map((entry) => {
    const key = entry.title && String(entry.title).trim()
    if (key && updates[key]) {
      if (entry.description !== updates[key]) {
        entry.description = updates[key]
        changed++
      }
    }
    return entry
  })

  if (changed === 0) {
    console.log('No descriptions were changed.')
    return
  }

  fs.writeFileSync(DATA, JSON.stringify(out, null, 2) + '\n', 'utf8')
  console.log(`Updated ${changed} descriptions in ${DATA}`)
}

main()
