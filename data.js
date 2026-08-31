// Kit list data - edit this file to add/update items, then push to GitHub to update the live site.
// category: 'essential' | 'recommended' | 'optional'
// subcategory: 'personal' | 'toiletries' | 'firstaid' | 'clothing'
// cycle: 'all' or a number (1, 2, 3) if the item is only needed for one specific cycle
// lengths: 'all' or an array of length numbers this item applies to
// quantityByLength: optional {length: quantityString} override
// quantityByCycle: optional {cycle: quantityString} override (used when qty differs by cycle, not by length)
const KIT_DATA = {
  "countries": [
    {
      "id": "south-africa",
      "name": "South Africa",
      "hasCycles": true,
      "lengths": [
        10,
        7,
        5,
        4
      ],
      "lengthDataConfirmed": true
    },
    {
      "id": "costa-rica",
      "name": "Costa Rica",
      "hasCycles": true,
      "lengths": [
        10,
        7,
        5,
        4
      ],
      "lengthDataConfirmed": false
    },
    {
      "id": "borneo",
      "name": "Borneo",
      "hasCycles": true,
      "lengths": [
        10,
        7,
        5,
        4
      ],
      "lengthDataConfirmed": false
    },
    {
      "id": "legacies",
      "name": "Legacies",
      "hasCycles": false,
      "lengths": [
        "Legacy Expedition"
      ],
      "lengthDataConfirmed": true
    }
  ],
  "cycles": [
    1,
    2,
    3
  ],
  "items": {
    "south-africa": [
      {
        "item": "Rucksack (65-85 Litres)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "This is a key bit of equipment, especially during trek when you'll carry 15-25kg of group kit. Look for: top-loading (a side-loading 'travel pack' won't support your back properly), 65-85 litre capacity depending on your body size, an adjustable back length, and comfortable, padded straps. This needs to fit ALL your kit inside it, so it's worth investing in a good one rather than borrowing an old or ill-fitting bag.",
        "lengths": [
          10,
          7,
          5
        ]
      },
      {
        "item": "Gym bag / Holdall / Duffel Bag",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "This will be what you travel with as your check-in luggage and should hold all your kit. It should be about 65-85 litres.",
        "lengths": [
          4
        ]
      },
      {
        "item": "Day bag",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Essential for carrying sunscreen, water bottle etc. to the project site each day, and doubles as your hand luggage on flights. An old school/college bag is fine - no need to buy new.",
        "lengths": "all"
      },
      {
        "item": "Sleeping bag (2-3 seasons)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Choose a synthetic bag (down bags are harder to dry and deteriorate in humid conditions). Comfort rating should suit the destination's temperature range - ask us if unsure. You'll be sleeping in this most nights of the Expedition.",
        "lengths": "all"
      },
      {
        "item": "Sleeping bag liner",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Keeps your sleeping bag clean and is far easier to wash. A cheap DIY option: fold a cotton sheet in half lengthways and stitch the long sides together, or use an old single duvet cover.",
        "lengths": "all"
      },
      {
        "item": "Roll / sleeping mat",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Full-length mats are best - remember you'll be sleeping on this for weeks. Foam mats are cheap (under GBP5); self-inflating mats are comfier but pricier and can puncture (bring a repair kit if so).",
        "lengths": "all"
      },
      {
        "item": "Dry bags & rucksack liner",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Waterproof bags you pack inside your rucksack to keep kit dry. Bring 2-3 in a mix of sizes - one small (camera/notepad), one larger (sleeping bag/clothes change). A rucksack liner is an alternative and should match your rucksack's capacity.",
        "lengths": [
          10,
          7,
          5
        ]
      },
      {
        "item": "Water containers",
        "quantity": "2-3 (3 litres min)",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a mix of hard bottles and collapsible containers to carry at least 3 litres. Collapsible containers pack down small when empty. You'll always be asked to drink purified water on Expedition (1 puritab = 1 litre).",
        "lengths": "all"
      },
      {
        "item": "Head torch + spare batteries",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Essential as there's rarely electricity on project sites - keeps your hands free. Bring at least one set of spare batteries. LED bulbs use less power, and a red-light setting attracts fewer insects at night. Worth packing a cheap backup hand torch too.",
        "lengths": "all"
      },
      {
        "item": "Mess tin / bowl",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A square metal container with a handle, used as a bowl for eating on placement. Available from camping shops, or bring a metal plate/bowl from home.",
        "lengths": "all"
      },
      {
        "item": "Mug",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "For hot drinks (tea, coffee etc). An old mug from home is fine - a small thermos/flask also works well.",
        "lengths": "all"
      },
      {
        "item": "Cutlery (knife/fork/spoon)",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a knife, fork and spoon - a set from home is fine. Camping 'sporks' can be flimsy and may need replacing.",
        "lengths": "all"
      },
      {
        "item": "Sunglasses",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "It's likely to be bright and sunny - make sure lenses have effective UV protection. A hard case is worth bringing.",
        "lengths": "all"
      },
      {
        "item": "Prescription glasses",
        "quantity": "1 (plus spare)",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a spare pair if possible, both in hard cases. Contact lenses are not permitted due to higher infection risk in a dirtier environment.",
        "lengths": "all"
      },
      {
        "item": "Toiletries & wash stuff",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Hygiene is crucial on Expedition. Bring the essentials, with opportunities to restock certain items (e.g. toothpaste) during changeovers.",
        "lengths": "all"
      },
      {
        "item": "Towel",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Lightweight, compact, quick-drying travel towels are recommended over a normal cotton towel. A sarong is a popular lightweight alternative that doubles as a blanket.",
        "lengths": "all"
      },
      {
        "item": "Watch with an alarm",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "There will be a lot of early mornings, so a watch with an alarm is recommended - a cheap plastic one is fine. Look for a light and water resistance.",
        "lengths": "all"
      },
      {
        "item": "Photocopies of key documents",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Keep copies of your passport photo page, vaccination dates, bank/card emergency contacts, insurance policy and emergency contact number, and a spare flight e-ticket, separate from the originals in case anything is lost or stolen.",
        "lengths": "all"
      },
      {
        "item": "Water purification tablets",
        "quantity": "20",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Each group is given purification droplets/tablets for large quantities of water, but you need your own small personal supply for emergencies. Cheap chlorine-based puritabs can be bought online.",
        "lengths": [
          10,
          7,
          5
        ],
        "quantityByLength": {
          "10": "20",
          "7": "20",
          "5": "10"
        }
      },
      {
        "item": "First aid kit",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "You must bring your own personal first aid kit - buy a pre-made kit and add any missing items, or assemble the items individually and store in a wash bag.",
        "lengths": "all"
      },
      {
        "item": "String / paracord",
        "quantity": "10-15m",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for improvising washing lines and hanging mosquito nets. Paracord is more hardwearing and reusable than standard string. No more than 15m is needed.",
        "lengths": "all"
      },
      {
        "item": "Sewing kit",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for repairing kit and clothing throughout the Expedition. A cheap non-branded kit is fine.",
        "lengths": "all"
      },
      {
        "item": "Padlock",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for securing kit while travelling and in storage. If transiting through the USA, make sure it's TSA-approved or it may be broken during customs searches.",
        "lengths": "all"
      },
      {
        "item": "Pen knife or multi-tool",
        "quantity": "1 (blade under 2 inches)",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Handy for general use - an inexpensive multi-tool with a blade under 2 inches, can opener and scissors is ideal. Must go in hold luggage, not hand luggage.",
        "lengths": "all"
      },
      {
        "item": "Travel holdall / rucksack cover bag",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A lightweight cover bag that protects your rucksack's straps during flights and can be padlocked for extra security. Make sure its capacity is bigger than your rucksack. Can be left at Field Base during trek.",
        "lengths": "all"
      },
      {
        "item": "Money",
        "quantity": "See spending guidance",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Raleigh covers your in-country travel, accommodation and food. Bring some spending money for extras like souvenirs, snacks and toiletries - see the detailed guidance for recommended amounts, which vary by Expedition length.",
        "lengths": "all",
        "quantityByLength": {
          "4": "R900 optional spending money (incl. max R200 cash)",
          "7": "R1300 optional spending money (incl. max R200 cash)",
          "10": "R2000 optional spending money (incl. max R200 cash) + optional Kruger day trip approx. R2000",
          "5": "See spending guidance (5-week figure not listed in the source guide - check with the Expedition Team)"
        }
      },
      {
        "item": "Camera",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "As phones aren't allowed on project, a camera is a great way to capture the Expedition. Avoid expensive/bulky items like tablets or laptops as we can't securely store high-value items. Bring spare batteries and enough memory cards, plus a waterproof case.",
        "lengths": "all"
      },
      {
        "item": "Trekking poles",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A matter of personal preference - some Participants find these help on steep or uneven ground. A sturdy stick picked up locally works just as well.",
        "lengths": [
          10,
          7,
          5
        ]
      },
      {
        "item": "Playing cards / games",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Great for filling downtime in the evenings and bonding with the team.",
        "lengths": "all"
      },
      {
        "item": "Journal / pen / pencil / paper",
        "quantity": "1 set",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for notes during training and project planning, and for keeping entertained when there's no phone signal. Bring writing paper so you can write home too.",
        "lengths": "all"
      },
      {
        "item": "Spare laces",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful backup in case your boot laces break mid-Expedition. Take up almost no space.",
        "lengths": "all"
      },
      {
        "item": "Inflatable pillow",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A small luxury - a dry bag stuffed with clothes or your fleece works just as well if you'd rather save the space.",
        "lengths": "all"
      },
      {
        "item": "Gaffa / duct tape",
        "quantity": "1 roll",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for repairing almost anything - tents, bags, kit. A non-branded roll saves money.",
        "lengths": "all"
      },
      {
        "item": "Bungee cords",
        "quantity": "2",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Elasticated cords with hooks, useful for securing equipment and rigging shelters. One or two is plenty.",
        "lengths": "all"
      },
      {
        "item": "Reusable handwarmers",
        "quantity": "2",
        "category": "optional",
        "subcategory": "personal",
        "cycle": 2,
        "description": "Reusable handwarmers help on cold nights and mornings during the cooler cycle. Bring reusable ones (rather than single-use) to last the whole cycle and reduce waste.",
        "lengths": "all"
      },
      {
        "item": "Soap",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Basic hygiene essential - try to bring biodegradable or eco-friendly options where possible.",
        "lengths": "all"
      },
      {
        "item": "Shampoo / conditioner",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Shampoo/conditioner bars take up minimal space and are more eco-friendly than bottles - available from stores like LUSH or Holland & Barrett.",
        "lengths": "all"
      },
      {
        "item": "Toothbrush",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Standard hygiene essential for the whole Expedition.",
        "lengths": "all"
      },
      {
        "item": "Toothpaste",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "You can usually restock this during changeovers in town if you run low.",
        "lengths": "all"
      },
      {
        "item": "Deodorant",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Choose unscented or low-fragrance options where possible, as strong scents can attract insects.",
        "lengths": "all"
      },
      {
        "item": "Insect repellent",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Look for a strong DEET concentration - this can be expensive or hard to find in-country, so bring enough for the full Expedition. Bring it regardless of cycle - still needed throughout.",
        "lengths": "all"
      },
      {
        "item": "Sunscreen / sunblock (min. 30 SPF)",
        "quantity": "2 x 200ml",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Minimum SPF30 (or SPF50 in tropical climates) - sunscreen can be pricey to buy locally, so pack enough to last, especially for the trek phase.",
        "lengths": "all",
        "quantityByLength": {
          "10": "2 x 200ml",
          "7": "2 x 200ml",
          "5": "1 x 200ml",
          "4": "1 x 200ml"
        }
      },
      {
        "item": "Eco-friendly laundry wash bar / gel",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "An eco-friendly wash bar or gel lets you hand-wash clothes on project without harming local water sources.",
        "lengths": [
          10,
          7,
          5
        ]
      },
      {
        "item": "Oral rehydration sachets",
        "quantity": "30",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Sachets like Dioralyte help you rehydrate quickly if you're unwell in the heat or after a stomach bug.",
        "lengths": "all"
      },
      {
        "item": "Pain relief tablets (paracetamol/ibuprofen)",
        "quantity": "2 packets each (max 32 tablets)",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Standard paracetamol/ibuprofen for headaches, muscle aches and minor pain.",
        "lengths": "all"
      },
      {
        "item": "Blister plasters",
        "quantity": "Min 10 large",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Specialist plasters that cushion and protect blisters, particularly important during the trek phase when you'll be walking long distances daily.",
        "lengths": "all"
      },
      {
        "item": "Zinc oxide tape (min 5cm wide)",
        "quantity": "1-2 rolls",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Tape used to protect feet from blisters (often applied before trek) and for general strapping/repairs.",
        "lengths": "all"
      },
      {
        "item": "Anti-fungal foot powder",
        "quantity": "20-50ml/g",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Helps keep feet dry to prevent fungal infections like athlete's foot, especially useful in hot, humid conditions.",
        "lengths": "all"
      },
      {
        "item": "Plasters",
        "quantity": "1 packet",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Standard plasters for minor cuts and grazes.",
        "lengths": "all"
      },
      {
        "item": "Antiseptic spray / cream",
        "quantity": "50-100ml or 1 tube",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For cleaning cuts and grazes to prevent infection before dressing them.",
        "lengths": "all"
      },
      {
        "item": "Hand sanitiser / gel",
        "quantity": "250ml bottle",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Important for hygiene where handwashing facilities may be limited on project sites.",
        "lengths": "all"
      },
      {
        "item": "Antihistamine tablets",
        "quantity": "1 pack",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For allergic reactions and insect bites/stings.",
        "lengths": "all"
      },
      {
        "item": "Antihistamine or hydrocortisone 1% cream",
        "quantity": "1 tube",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "A topical cream to relieve itching and irritation from insect bites.",
        "lengths": "all"
      },
      {
        "item": "Prescription medication / EpiPens",
        "quantity": "Enough for Expedition + 2 weeks",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Bring enough for the full Expedition plus extra time in case of travel delays or lost/damaged medication. Let the Expedition Team know in advance if you're taking prescription medication.",
        "lengths": "all"
      },
      {
        "item": "Scissors",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Small first aid scissors for cutting tape, plasters or clothing in an emergency.",
        "lengths": "all"
      },
      {
        "item": "Tweezers",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Useful for removing splinters, thorns or ticks.",
        "lengths": "all"
      },
      {
        "item": "Conforming bandage (100mm)",
        "quantity": "2",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "A conforming bandage for securing dressings or supporting minor sprains.",
        "lengths": "all"
      },
      {
        "item": "Vaseline",
        "quantity": "1 small tin (20g)",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Useful for chafing, dry lips and minor skin protection - a small tin is enough.",
        "lengths": "all"
      },
      {
        "item": "Walking boots (broken in)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A key investment alongside your rucksack - make sure boots are comfortable, offer ankle support, and are broken in with several short walks (up to 5 miles) before you arrive. Avoid Timberland/Caterpillar-style work boots as they're not suitable for hiking.",
        "lengths": [
          10,
          7,
          5
        ]
      },
      {
        "item": "Work boots (broken in)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A key investment - make sure boots are comfortable, offer ankle support, and are broken in with several short walks (up to 5 miles) before you arrive.",
        "lengths": [
          4
        ]
      },
      {
        "item": "Sandals (toe and ankle straps)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must have toe and ankle straps to stay on your feet and dry out easily - used for washing and river crossings. Crocs with a closed toe are a good choice in jungle environments to keep insects off your feet.",
        "lengths": "all"
      },
      {
        "item": "Long sleeved tops / shirts",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Worn at dusk and dawn to protect against mosquitoes, and during the day for sun protection. Lightweight, quick-dry fabric is ideal. You'll need an extra one during Cycle 2, when it's cooler.",
        "lengths": "all",
        "quantityByCycle": {
          "2": "2"
        }
      },
      {
        "item": "T-shirts",
        "quantity": "3-4",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must cover the shoulders and dry quickly - old, cheap tops work just as well as expensive brands.",
        "lengths": "all"
      },
      {
        "item": "Fleece / jumper",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Temperatures drop at night and in the mornings, especially at altitude or in the jungle - fleece dries faster than a thick hoody and is also useful for travel days. You'll need an extra one during Cycle 2, when it's cooler.",
        "lengths": "all",
        "quantityByCycle": {
          "2": "2"
        }
      },
      {
        "item": "Warm jacket",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": 2,
        "description": "An extra warm layer needed only for the cooler cycle - pack this in addition to your fleece if travelling during that period.",
        "lengths": "all"
      },
      {
        "item": "Thermal leggings & top",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": 2,
        "description": "A base layer for cold nights and mornings during the cooler cycle - not required for warmer cycles.",
        "lengths": "all"
      },
      {
        "item": "Trousers",
        "quantity": "2",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring at least one pair suited to trekking (quick-dry hiking trousers) and a lighter pair for relaxing at Field Base. Avoid jeans on project - they're too hot and slow to dry. Zip-off trousers that convert to shorts save packing space.",
        "lengths": "all"
      },
      {
        "item": "Shorts",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must reach the knee for cultural sensitivity on community projects - quick-dry sports shorts with cargo pockets are ideal.",
        "lengths": "all"
      },
      {
        "item": "Socks (walking + normal)",
        "quantity": "3-4x walking, 4x normal",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring a mix of walking socks (for trek and long days on your feet) and normal cotton socks (cooler, for evenings).",
        "lengths": "all"
      },
      {
        "item": "Underwear",
        "quantity": "4-7",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring enough to last the Expedition, plus a spare set to leave at Field Base. Dark colours hide dirt better.",
        "lengths": "all"
      },
      {
        "item": "Bras",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Sports bras are generally found to be more comfortable for active days.",
        "lengths": "all"
      },
      {
        "item": "Hat (wide brimmed)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A wide brim protects your face and neck from sun and rain.",
        "lengths": "all"
      },
      {
        "item": "Lightweight waterproof jacket",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A lightweight waterproof jacket or poncho for wet weather - jackets are more practical, ponchos cover more of your kit but restrict movement.",
        "lengths": "all"
      },
      {
        "item": "Swimming costume / bikini",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Needed for washing in rivers/streams as well as any swimming. Board shorts or a costume with a T-shirt over the top may be more culturally appropriate on projects.",
        "lengths": "all"
      },
      {
        "item": "Buff",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A versatile piece of neck/head wear useful for sun and dust protection.",
        "lengths": "all"
      },
      {
        "item": "Warm hat",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": 2,
        "description": "A warm hat for cold mornings and evenings during the cooler cycle.",
        "lengths": "all"
      },
      {
        "item": "Gloves",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": 2,
        "description": "Warm gloves useful for cold mornings and evenings.",
        "lengths": "all"
      },
      {
        "item": "Other shoes (trainers / flip flops)",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Comfortable alternatives to boots/sandals for relaxing at Field Base, e.g. trainers or flip flops.",
        "lengths": "all"
      },
      {
        "item": "Set of clothes for field base / travelling",
        "quantity": "1-2",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Worth having one clean, presentable outfit for changeovers, community events, and travel days.",
        "lengths": "all"
      },
      {
        "item": "Work / garden gloves",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Hard-wearing gloves for manual work on project sites - available cheaply from hardware stores or supermarkets.",
        "lengths": "all"
      }
    ],
    "costa-rica": [
      {
        "item": "Rucksack (65-85 Litres)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "This is a key bit of equipment, especially during trek when you'll carry 15-25kg of group kit. Look for: top-loading (a side-loading 'travel pack' won't support your back properly), 65-85 litre capacity depending on your body size, an adjustable back length, and comfortable, padded straps. This needs to fit ALL your kit inside it, so it's worth investing in a good one rather than borrowing an old or ill-fitting bag.",
        "lengths": "all"
      },
      {
        "item": "Day bag",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Essential for carrying sunscreen, water bottle etc. to the project site each day, and doubles as your hand luggage on flights. An old school/college bag is fine - no need to buy new.",
        "lengths": "all"
      },
      {
        "item": "Sleeping bag (2-3 seasons)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Choose a synthetic bag (down bags are harder to dry and deteriorate in humid conditions). Comfort rating should suit the destination's temperature range - ask us if unsure. You'll be sleeping in this most nights of the Expedition.",
        "lengths": "all"
      },
      {
        "item": "Sleeping bag liner",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Keeps your sleeping bag clean and is far easier to wash. A cheap DIY option: fold a cotton sheet in half lengthways and stitch the long sides together, or use an old single duvet cover.",
        "lengths": "all"
      },
      {
        "item": "Roll / sleeping mat",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Full-length mats are best - remember you'll be sleeping on this for weeks. Foam mats are cheap (under GBP5); self-inflating mats are comfier but pricier and can puncture (bring a repair kit if so).",
        "lengths": "all"
      },
      {
        "item": "Dry bags & rucksack liner",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Waterproof bags you pack inside your rucksack to keep kit dry. Bring 2-3 in a mix of sizes - one small (camera/notepad), one larger (sleeping bag/clothes change). A rucksack liner is an alternative and should match your rucksack's capacity.",
        "lengths": "all"
      },
      {
        "item": "Water containers",
        "quantity": "2-3 (3 litres min)",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a mix of hard bottles and collapsible containers to carry at least 3 litres. Collapsible containers pack down small when empty. You'll always be asked to drink purified water on Expedition (1 puritab = 1 litre).",
        "lengths": "all"
      },
      {
        "item": "Head torch",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Essential as there's rarely electricity on project sites - keeps your hands free. Bring at least one set of spare batteries. LED bulbs use less power, and a red-light setting attracts fewer insects at night. Worth packing a cheap backup hand torch too.",
        "lengths": "all"
      },
      {
        "item": "Mess tin / plate / bowl",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A square metal container with a handle, used as a bowl for eating on placement. Available from camping shops, or bring a metal plate/bowl from home.",
        "lengths": "all"
      },
      {
        "item": "Mug",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "For hot drinks (tea, coffee etc). An old mug from home is fine - a small thermos/flask also works well.",
        "lengths": "all"
      },
      {
        "item": "Cutlery",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a knife, fork and spoon - a set from home is fine. Camping 'sporks' can be flimsy and may need replacing.",
        "lengths": "all"
      },
      {
        "item": "Sunglasses",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "It's likely to be bright and sunny - make sure lenses have effective UV protection. A hard case is worth bringing.",
        "lengths": "all"
      },
      {
        "item": "First aid kit",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "You must bring your own personal first aid kit - buy a pre-made kit and add any missing items, or assemble the items individually and store in a wash bag.",
        "lengths": "all"
      },
      {
        "item": "Toiletries & hygiene items",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Hygiene is crucial on Expedition. Bring the essentials, with opportunities to restock certain items (e.g. toothpaste) during changeovers.",
        "lengths": "all"
      },
      {
        "item": "Towel",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Lightweight, compact, quick-drying travel towels are recommended over a normal cotton towel. A sarong is a popular lightweight alternative that doubles as a blanket.",
        "lengths": "all"
      },
      {
        "item": "Photocopies of key documents",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Keep copies of your passport photo page, vaccination dates, bank/card emergency contacts, insurance policy and emergency contact number, and a spare flight e-ticket, separate from the originals in case anything is lost or stolen.",
        "lengths": "all"
      },
      {
        "item": "Water purification tablets",
        "quantity": "30 tablets",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Each group is given purification droplets/tablets for large quantities of water, but you need your own small personal supply for emergencies. Cheap chlorine-based puritabs can be bought online.",
        "lengths": "all"
      },
      {
        "item": "Gaffa / duct tape",
        "quantity": "1 roll",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for repairing almost anything - tents, bags, kit. A non-branded roll saves money.",
        "lengths": "all"
      },
      {
        "item": "Mosquito net",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Reduces the risk of insect-borne illness while sleeping. A box-shaped net is easiest to put up since it attaches at all four corners. It must be pre-treated with permethrin - buy a treatment bottle separately if using an old/untreated net.",
        "lengths": "all"
      },
      {
        "item": "Money",
        "quantity": "See spending guidance",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Raleigh covers your in-country travel, accommodation and food. Bring some spending money for extras like souvenirs, snacks and toiletries - see the detailed guidance for recommended amounts, which vary by Expedition length.",
        "lengths": "all"
      },
      {
        "item": "String / paracord",
        "quantity": "10-15m",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for improvising washing lines and hanging mosquito nets. Paracord is more hardwearing and reusable than standard string. No more than 15m is needed.",
        "lengths": "all"
      },
      {
        "item": "Sewing kit",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for repairing kit and clothing throughout the Expedition. A cheap non-branded kit is fine.",
        "lengths": "all"
      },
      {
        "item": "Padlocks",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for securing kit while travelling and in storage. If transiting through the USA, make sure it's TSA-approved or it may be broken during customs searches.",
        "lengths": "all"
      },
      {
        "item": "Pen knife or multi-tool",
        "quantity": "1 (blade under 2 inches)",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Handy for general use - an inexpensive multi-tool with a blade under 2 inches, can opener and scissors is ideal. Must go in hold luggage, not hand luggage.",
        "lengths": "all"
      },
      {
        "item": "Bungee cords",
        "quantity": "2",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Elasticated cords with hooks, useful for securing equipment and rigging shelters. One or two is plenty.",
        "lengths": "all"
      },
      {
        "item": "Watch with an alarm",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "There will be a lot of early mornings, so a watch with an alarm is recommended - a cheap plastic one is fine. Look for a light and water resistance.",
        "lengths": "all"
      },
      {
        "item": "Travel holdall / rucksack cover bag",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A lightweight cover bag that protects your rucksack's straps during flights and can be padlocked for extra security. Make sure its capacity is bigger than your rucksack. Can be left at Field Base during trek.",
        "lengths": "all"
      },
      {
        "item": "Small travel camera",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "As phones aren't allowed on project, a camera is a great way to capture the Expedition. Avoid expensive/bulky items like tablets or laptops as we can't securely store high-value items. Bring spare batteries and enough memory cards, plus a waterproof case.",
        "lengths": "all"
      },
      {
        "item": "Trekking poles",
        "quantity": "1 pair",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A matter of personal preference - some Participants find these help on steep or uneven ground. A sturdy stick picked up locally works just as well.",
        "lengths": "all"
      },
      {
        "item": "Playing cards / games",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Great for filling downtime in the evenings and bonding with the team.",
        "lengths": "all"
      },
      {
        "item": "Journal / pen / pencil / paper",
        "quantity": "1 set",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for notes during training and project planning, and for keeping entertained when there's no phone signal. Bring writing paper so you can write home too.",
        "lengths": "all"
      },
      {
        "item": "Spanish phrase book",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A little Spanish goes a long way when working closely with Costa Rican teammates and local communities. Duolingo or a phrasebook before you go is invaluable.",
        "lengths": "all"
      },
      {
        "item": "Travel-proof holdall",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A lightweight cover bag that protects your rucksack's straps during flights and can be padlocked for extra security. Make sure its capacity is bigger than your rucksack. Can be left at Field Base during trek.",
        "lengths": "all"
      },
      {
        "item": "Liquid body wash / hand soap",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Basic hygiene essential - try to bring biodegradable or eco-friendly options where possible.",
        "lengths": "all"
      },
      {
        "item": "Bar of soap",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Basic hygiene essential - try to bring biodegradable or eco-friendly options where possible.",
        "lengths": "all"
      },
      {
        "item": "Shampoo / conditioner",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Shampoo/conditioner bars take up minimal space and are more eco-friendly than bottles - available from stores like LUSH or Holland & Barrett.",
        "lengths": "all"
      },
      {
        "item": "Oral rehydration sachets",
        "quantity": "4 packs of 20",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Sachets like Dioralyte help you rehydrate quickly if you're unwell in the heat or after a stomach bug.",
        "lengths": "all"
      },
      {
        "item": "Pain relief tablets (paracetamol/ibuprofen)",
        "quantity": "4 packets of each",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Standard paracetamol/ibuprofen for headaches, muscle aches and minor pain.",
        "lengths": "all"
      },
      {
        "item": "Blister plasters",
        "quantity": "Min 5 large",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Specialist plasters that cushion and protect blisters, particularly important during the trek phase when you'll be walking long distances daily.",
        "lengths": "all"
      },
      {
        "item": "Zinc oxide tape (min 5cm wide)",
        "quantity": "2-4 rolls",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Tape used to protect feet from blisters (often applied before trek) and for general strapping/repairs.",
        "lengths": "all"
      },
      {
        "item": "Anti-fungal foot powder / talcum powder",
        "quantity": "1-2 pots 20-50ml/g",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Helps keep feet dry to prevent fungal infections like athlete's foot, especially useful in hot, humid conditions.",
        "lengths": "all"
      },
      {
        "item": "Plasters",
        "quantity": "1 packet",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Standard plasters for minor cuts and grazes.",
        "lengths": "all"
      },
      {
        "item": "Antiseptic solution",
        "quantity": "50-100ml",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For cleaning cuts and grazes to prevent infection before dressing them.",
        "lengths": "all"
      },
      {
        "item": "Antiseptic spray / cream",
        "quantity": "1 tube",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For cleaning cuts and grazes to prevent infection before dressing them.",
        "lengths": "all"
      },
      {
        "item": "Hand sanitiser / gel",
        "quantity": "250ml bottle",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Important for hygiene where handwashing facilities may be limited on project sites.",
        "lengths": "all"
      },
      {
        "item": "Insect repellent (50% DEET)",
        "quantity": "1 large + 1 small bottle",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Look for a strong DEET concentration - this can be expensive or hard to find in-country, so bring enough for the full Expedition. Bring it regardless of cycle - still needed throughout.",
        "lengths": "all"
      },
      {
        "item": "Sunscreen / sunblock (min. 30 SPF)",
        "quantity": "1 large + 1 small bottle",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Minimum SPF30 (or SPF50 in tropical climates) - sunscreen can be pricey to buy locally, so pack enough to last, especially for the trek phase.",
        "lengths": "all"
      },
      {
        "item": "Prescription medication",
        "quantity": "Enough for Expedition + 2 weeks",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Bring enough for the full Expedition plus extra time in case of travel delays or lost/damaged medication. Let the Expedition Team know in advance if you're taking prescription medication.",
        "lengths": "all"
      },
      {
        "item": "Scissors",
        "quantity": "1",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Small first aid scissors for cutting tape, plasters or clothing in an emergency.",
        "lengths": "all"
      },
      {
        "item": "Tweezers",
        "quantity": "1",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Useful for removing splinters, thorns or ticks.",
        "lengths": "all"
      },
      {
        "item": "Antihistamine or hydrocortisone 1% cream",
        "quantity": "1 tube",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "A topical cream to relieve itching and irritation from insect bites.",
        "lengths": "all"
      },
      {
        "item": "Antihistamine tablets",
        "quantity": "4 packs",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For allergic reactions and insect bites/stings.",
        "lengths": "all"
      },
      {
        "item": "Vaseline",
        "quantity": "1 pot",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Useful for chafing, dry lips and minor skin protection - a small tin is enough.",
        "lengths": "all"
      },
      {
        "item": "Walking boots",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A key investment alongside your rucksack - make sure boots are comfortable, offer ankle support, and are broken in with several short walks (up to 5 miles) before you arrive. Avoid Timberland/Caterpillar-style work boots as they're not suitable for hiking.",
        "lengths": "all"
      },
      {
        "item": "Spare laces",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Useful backup in case your boot laces break mid-Expedition. Take up almost no space.",
        "lengths": "all"
      },
      {
        "item": "Sandals",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must have toe and ankle straps to stay on your feet and dry out easily - used for washing and river crossings. Crocs with a closed toe are a good choice in jungle environments to keep insects off your feet.",
        "lengths": "all"
      },
      {
        "item": "Long sleeved tops",
        "quantity": "2",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Worn at dusk and dawn to protect against mosquitoes, and during the day for sun protection. Lightweight, quick-dry fabric is ideal. You'll need an extra one during Cycle 2, when it's cooler.",
        "lengths": "all"
      },
      {
        "item": "T-shirts",
        "quantity": "3-4",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must cover the shoulders and dry quickly - old, cheap tops work just as well as expensive brands.",
        "lengths": "all"
      },
      {
        "item": "Fleece",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Temperatures drop at night and in the mornings, especially at altitude or in the jungle - fleece dries faster than a thick hoody and is also useful for travel days. You'll need an extra one during Cycle 2, when it's cooler.",
        "lengths": "all"
      },
      {
        "item": "Warm jacket",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "An extra warm layer needed only for the cooler cycle - pack this in addition to your fleece if travelling during that period.",
        "lengths": "all"
      },
      {
        "item": "Trousers",
        "quantity": "2",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring at least one pair suited to trekking (quick-dry hiking trousers) and a lighter pair for relaxing at Field Base. Avoid jeans on project - they're too hot and slow to dry. Zip-off trousers that convert to shorts save packing space.",
        "lengths": "all"
      },
      {
        "item": "Shorts",
        "quantity": "2",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must reach the knee for cultural sensitivity on community projects - quick-dry sports shorts with cargo pockets are ideal.",
        "lengths": "all"
      },
      {
        "item": "Socks (walking + normal)",
        "quantity": "4x walking, 4x normal",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring a mix of walking socks (for trek and long days on your feet) and normal cotton socks (cooler, for evenings).",
        "lengths": "all"
      },
      {
        "item": "Underwear",
        "quantity": "6-8",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring enough to last the Expedition, plus a spare set to leave at Field Base. Dark colours hide dirt better.",
        "lengths": "all"
      },
      {
        "item": "Work / garden gloves",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Hard-wearing gloves for manual work on project sites - available cheaply from hardware stores or supermarkets.",
        "lengths": "all"
      },
      {
        "item": "Hat (wide brimmed)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A wide brim protects your face and neck from sun and rain.",
        "lengths": "all"
      },
      {
        "item": "Lightweight waterproof jacket",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A lightweight waterproof jacket or poncho for wet weather - jackets are more practical, ponchos cover more of your kit but restrict movement.",
        "lengths": "all"
      },
      {
        "item": "Swimming costume",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Needed for washing in rivers/streams as well as any swimming. Board shorts or a costume with a T-shirt over the top may be more culturally appropriate on projects.",
        "lengths": "all"
      },
      {
        "item": "Flip flops",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Comfortable alternatives to boots/sandals for relaxing at Field Base, e.g. trainers or flip flops.",
        "lengths": "all"
      },
      {
        "item": "Other shoes (e.g. trainers)",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Comfortable alternatives to boots/sandals for relaxing at Field Base, e.g. trainers or flip flops.",
        "lengths": "all"
      },
      {
        "item": "Nicer set of clothes for Fieldbase / travelling",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Worth having one clean, presentable outfit for changeovers, community events, and travel days.",
        "lengths": "all"
      },
      {
        "item": "Beanie hat",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": 3,
        "description": "A warm hat for cold mornings and evenings during the cooler cycle.",
        "lengths": "all"
      },
      {
        "item": "Gloves",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": 3,
        "description": "Warm gloves useful for cold mornings and evenings.",
        "lengths": "all"
      }
    ],
    "borneo": [
      {
        "item": "Rucksack (65-85 Litres)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "This is a key bit of equipment, especially during trek when you'll carry 15-25kg of group kit. Look for: top-loading (a side-loading 'travel pack' won't support your back properly), 65-85 litre capacity depending on your body size, an adjustable back length, and comfortable, padded straps. This needs to fit ALL your kit inside it, so it's worth investing in a good one rather than borrowing an old or ill-fitting bag.",
        "lengths": "all"
      },
      {
        "item": "Day bag (30 litres)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Essential for carrying sunscreen, water bottle etc. to the project site each day, and doubles as your hand luggage on flights. An old school/college bag is fine - no need to buy new.",
        "lengths": "all"
      },
      {
        "item": "Sleeping bag (1-2 seasons)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Choose a synthetic bag (down bags are harder to dry and deteriorate in humid conditions). Comfort rating should suit the destination's temperature range - ask us if unsure. You'll be sleeping in this most nights of the Expedition.",
        "lengths": "all"
      },
      {
        "item": "Sleeping bag liner",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Keeps your sleeping bag clean and is far easier to wash. A cheap DIY option: fold a cotton sheet in half lengthways and stitch the long sides together, or use an old single duvet cover.",
        "lengths": "all"
      },
      {
        "item": "Roll / sleeping mat",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Full-length mats are best - remember you'll be sleeping on this for weeks. Foam mats are cheap (under GBP5); self-inflating mats are comfier but pricier and can puncture (bring a repair kit if so).",
        "lengths": "all"
      },
      {
        "item": "Mosquito net (box shaped)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Reduces the risk of insect-borne illness while sleeping. A box-shaped net is easiest to put up since it attaches at all four corners. It must be pre-treated with permethrin - buy a treatment bottle separately if using an old/untreated net.",
        "lengths": "all"
      },
      {
        "item": "String / paracord",
        "quantity": "10-15m",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for improvising washing lines and hanging mosquito nets. Paracord is more hardwearing and reusable than standard string. No more than 15m is needed.",
        "lengths": "all"
      },
      {
        "item": "Dry bags & rucksack liner",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Waterproof bags you pack inside your rucksack to keep kit dry. Bring 2-3 in a mix of sizes - one small (camera/notepad), one larger (sleeping bag/clothes change). A rucksack liner is an alternative and should match your rucksack's capacity.",
        "lengths": "all"
      },
      {
        "item": "Water containers (wide brimmed)",
        "quantity": "3 (1 litre each)",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a mix of hard bottles and collapsible containers to carry at least 3 litres. Collapsible containers pack down small when empty. You'll always be asked to drink purified water on Expedition (1 puritab = 1 litre).",
        "lengths": "all"
      },
      {
        "item": "Head torch + spare batteries",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Essential as there's rarely electricity on project sites - keeps your hands free. Bring at least one set of spare batteries. LED bulbs use less power, and a red-light setting attracts fewer insects at night. Worth packing a cheap backup hand torch too.",
        "lengths": "all"
      },
      {
        "item": "Mess tin / travel bowl",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A square metal container with a handle, used as a bowl for eating on placement. Available from camping shops, or bring a metal plate/bowl from home.",
        "lengths": "all"
      },
      {
        "item": "Mug",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "For hot drinks (tea, coffee etc). An old mug from home is fine - a small thermos/flask also works well.",
        "lengths": "all"
      },
      {
        "item": "Cutlery (K/F/S)",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a knife, fork and spoon - a set from home is fine. Camping 'sporks' can be flimsy and may need replacing.",
        "lengths": "all"
      },
      {
        "item": "Sunglasses",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "It's likely to be bright and sunny - make sure lenses have effective UV protection. A hard case is worth bringing.",
        "lengths": "all"
      },
      {
        "item": "Prescription glasses",
        "quantity": "1 (plus spare)",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a spare pair if possible, both in hard cases. Contact lenses are not permitted due to higher infection risk in a dirtier environment.",
        "lengths": "all"
      },
      {
        "item": "Toiletries & wash stuff",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Hygiene is crucial on Expedition. Bring the essentials, with opportunities to restock certain items (e.g. toothpaste) during changeovers.",
        "lengths": "all"
      },
      {
        "item": "Quick dry towel",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Lightweight, compact, quick-drying travel towels are recommended over a normal cotton towel. A sarong is a popular lightweight alternative that doubles as a blanket.",
        "lengths": "all"
      },
      {
        "item": "Watch with an alarm",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "There will be a lot of early mornings, so a watch with an alarm is recommended - a cheap plastic one is fine. Look for a light and water resistance.",
        "lengths": "all"
      },
      {
        "item": "Photocopies of key documents",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Keep copies of your passport photo page, vaccination dates, bank/card emergency contacts, insurance policy and emergency contact number, and a spare flight e-ticket, separate from the originals in case anything is lost or stolen.",
        "lengths": "all"
      },
      {
        "item": "First aid kit",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "You must bring your own personal first aid kit - buy a pre-made kit and add any missing items, or assemble the items individually and store in a wash bag.",
        "lengths": "all"
      },
      {
        "item": "Money",
        "quantity": "See spending guidance",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Raleigh covers your in-country travel, accommodation and food. Bring some spending money for extras like souvenirs, snacks and toiletries - see the detailed guidance for recommended amounts, which vary by Expedition length.",
        "lengths": "all"
      },
      {
        "item": "Sewing kit",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for repairing kit and clothing throughout the Expedition. A cheap non-branded kit is fine.",
        "lengths": "all"
      },
      {
        "item": "Padlock",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for securing kit while travelling and in storage. If transiting through the USA, make sure it's TSA-approved or it may be broken during customs searches.",
        "lengths": "all"
      },
      {
        "item": "Pen knife or multi-tool",
        "quantity": "1 (blade under 2 inches)",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Handy for general use - an inexpensive multi-tool with a blade under 2 inches, can opener and scissors is ideal. Must go in hold luggage, not hand luggage.",
        "lengths": "all"
      },
      {
        "item": "Travel holdall / rucksack cover bag",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A lightweight cover bag that protects your rucksack's straps during flights and can be padlocked for extra security. Make sure its capacity is bigger than your rucksack. Can be left at Field Base during trek.",
        "lengths": "all"
      },
      {
        "item": "Camera",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "As phones aren't allowed on project, a camera is a great way to capture the Expedition. Avoid expensive/bulky items like tablets or laptops as we can't securely store high-value items. Bring spare batteries and enough memory cards, plus a waterproof case.",
        "lengths": "all"
      },
      {
        "item": "Gaffa / duct tape",
        "quantity": "1 roll",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for repairing almost anything - tents, bags, kit. A non-branded roll saves money.",
        "lengths": "all"
      },
      {
        "item": "Bungee cords",
        "quantity": "2",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Elasticated cords with hooks, useful for securing equipment and rigging shelters. One or two is plenty.",
        "lengths": "all"
      },
      {
        "item": "Trekking poles",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A matter of personal preference - some Participants find these help on steep or uneven ground. A sturdy stick picked up locally works just as well.",
        "lengths": "all"
      },
      {
        "item": "Playing cards / games",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Great for filling downtime in the evenings and bonding with the team.",
        "lengths": "all"
      },
      {
        "item": "Journal / pen / pencil / paper",
        "quantity": "1 set",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for notes during training and project planning, and for keeping entertained when there's no phone signal. Bring writing paper so you can write home too.",
        "lengths": "all"
      },
      {
        "item": "Spare laces",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful backup in case your boot laces break mid-Expedition. Take up almost no space.",
        "lengths": "all"
      },
      {
        "item": "Inflatable pillow",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A small luxury - a dry bag stuffed with clothes or your fleece works just as well if you'd rather save the space.",
        "lengths": "all"
      },
      {
        "item": "Umbrella",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Handy in Borneo's heavy rain, particularly around Field Base. Not practical to use on trek.",
        "lengths": "all"
      },
      {
        "item": "Soap",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Basic hygiene essential - try to bring biodegradable or eco-friendly options where possible.",
        "lengths": "all"
      },
      {
        "item": "Shampoo / conditioner",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Shampoo/conditioner bars take up minimal space and are more eco-friendly than bottles - available from stores like LUSH or Holland & Barrett.",
        "lengths": "all"
      },
      {
        "item": "Toothbrush",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Standard hygiene essential for the whole Expedition.",
        "lengths": "all"
      },
      {
        "item": "Toothpaste",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "You can usually restock this during changeovers in town if you run low.",
        "lengths": "all"
      },
      {
        "item": "Deodorant",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Choose unscented or low-fragrance options where possible, as strong scents can attract insects.",
        "lengths": "all"
      },
      {
        "item": "Insect repellent",
        "quantity": "2 x 200ml",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Look for a strong DEET concentration - this can be expensive or hard to find in-country, so bring enough for the full Expedition. Bring it regardless of cycle - still needed throughout.",
        "lengths": "all"
      },
      {
        "item": "Sunscreen / sunblock (min. 50 SPF)",
        "quantity": "2 x 200ml",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Minimum SPF30 (or SPF50 in tropical climates) - sunscreen can be pricey to buy locally, so pack enough to last, especially for the trek phase.",
        "lengths": "all"
      },
      {
        "item": "Eco-friendly laundry wash bar / gel",
        "quantity": "1-2",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "An eco-friendly wash bar or gel lets you hand-wash clothes on project without harming local water sources.",
        "lengths": "all"
      },
      {
        "item": "Wet wipes (biodegradable)",
        "quantity": "1 packet min",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Handy for a quick clean when there's no opportunity to wash - must be biodegradable to avoid harming the local environment.",
        "lengths": "all"
      },
      {
        "item": "Oral rehydration sachets",
        "quantity": "30",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Sachets like Dioralyte help you rehydrate quickly if you're unwell in the heat or after a stomach bug.",
        "lengths": "all"
      },
      {
        "item": "Electrolyte tablets",
        "quantity": "50-70 (1 per day)",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Replace salts and minerals lost through sweating in Borneo's heat and humidity - cheap tablets from a supermarket or outdoor store are fine.",
        "lengths": "all"
      },
      {
        "item": "Water purification tablets (1 litre each)",
        "quantity": "10 strips of 10 tablets",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Each group is given purification droplets/tablets for large quantities of water, but you need your own small personal supply for emergencies. Cheap chlorine-based puritabs can be bought online.",
        "lengths": "all"
      },
      {
        "item": "Pain relief tablets (paracetamol/ibuprofen)",
        "quantity": "2 packets each (max 32 tablets)",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Standard paracetamol/ibuprofen for headaches, muscle aches and minor pain.",
        "lengths": "all"
      },
      {
        "item": "Loperamide (e.g. Imodium)",
        "quantity": "1 packet",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For managing an upset stomach - useful during trek when access to a toilet is limited.",
        "lengths": "all"
      },
      {
        "item": "Blister plasters",
        "quantity": "Min 10 large",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Specialist plasters that cushion and protect blisters, particularly important during the trek phase when you'll be walking long distances daily.",
        "lengths": "all"
      },
      {
        "item": "Zinc oxide tape (min 5cm wide)",
        "quantity": "1-2 rolls",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Tape used to protect feet from blisters (often applied before trek) and for general strapping/repairs.",
        "lengths": "all"
      },
      {
        "item": "Anti-fungal foot powder",
        "quantity": "20-50ml/g",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Helps keep feet dry to prevent fungal infections like athlete's foot, especially useful in hot, humid conditions.",
        "lengths": "all"
      },
      {
        "item": "Plasters",
        "quantity": "1 packet",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Standard plasters for minor cuts and grazes.",
        "lengths": "all"
      },
      {
        "item": "Antiseptic spray",
        "quantity": "50-100ml or 1 tube",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For cleaning cuts and grazes to prevent infection before dressing them.",
        "lengths": "all"
      },
      {
        "item": "Antiseptic wipes",
        "quantity": "10-20",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For cleaning cuts and grazes to prevent infection before dressing them.",
        "lengths": "all"
      },
      {
        "item": "Hand sanitiser / gel",
        "quantity": "250ml bottle",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Important for hygiene where handwashing facilities may be limited on project sites.",
        "lengths": "all"
      },
      {
        "item": "Antihistamine tablets",
        "quantity": "1 pack",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For allergic reactions and insect bites/stings.",
        "lengths": "all"
      },
      {
        "item": "Antihistamine or hydrocortisone 1% cream",
        "quantity": "1 tube",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "A topical cream to relieve itching and irritation from insect bites.",
        "lengths": "all"
      },
      {
        "item": "Prescription medication / EpiPens",
        "quantity": "Enough for Expedition + 2 weeks",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Bring enough for the full Expedition plus extra time in case of travel delays or lost/damaged medication. Let the Expedition Team know in advance if you're taking prescription medication.",
        "lengths": "all"
      },
      {
        "item": "Scissors",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Small first aid scissors for cutting tape, plasters or clothing in an emergency.",
        "lengths": "all"
      },
      {
        "item": "Tweezers",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Useful for removing splinters, thorns or ticks.",
        "lengths": "all"
      },
      {
        "item": "Conforming bandage (100mm)",
        "quantity": "2",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "A conforming bandage for securing dressings or supporting minor sprains.",
        "lengths": "all"
      },
      {
        "item": "Vaseline",
        "quantity": "1 small tin (20g)",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Useful for chafing, dry lips and minor skin protection - a small tin is enough.",
        "lengths": "all"
      },
      {
        "item": "Walking boots (broken in)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A key investment alongside your rucksack - make sure boots are comfortable, offer ankle support, and are broken in with several short walks (up to 5 miles) before you arrive. Avoid Timberland/Caterpillar-style work boots as they're not suitable for hiking.",
        "lengths": "all"
      },
      {
        "item": "Sandals or crocs (covered toe & ankle strap)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must have toe and ankle straps to stay on your feet and dry out easily - used for washing and river crossings. Crocs with a closed toe are a good choice in jungle environments to keep insects off your feet.",
        "lengths": "all"
      },
      {
        "item": "Lightweight long sleeved tops / shirts",
        "quantity": "1-2",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Worn at dusk and dawn to protect against mosquitoes, and during the day for sun protection. Lightweight, quick-dry fabric is ideal. You'll need an extra one during Cycle 2, when it's cooler.",
        "lengths": "all"
      },
      {
        "item": "T-shirts (quick dry)",
        "quantity": "3-4",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must cover the shoulders and dry quickly - old, cheap tops work just as well as expensive brands.",
        "lengths": "all"
      },
      {
        "item": "Fleece / jumper (for travel)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Temperatures drop at night and in the mornings, especially at altitude or in the jungle - fleece dries faster than a thick hoody and is also useful for travel days. You'll need an extra one during Cycle 2, when it's cooler.",
        "lengths": "all"
      },
      {
        "item": "Trousers (quick dry)",
        "quantity": "2 (1 hiking, 1 for chilling)",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring at least one pair suited to trekking (quick-dry hiking trousers) and a lighter pair for relaxing at Field Base. Avoid jeans on project - they're too hot and slow to dry. Zip-off trousers that convert to shorts save packing space.",
        "lengths": "all"
      },
      {
        "item": "Shorts (to the knee)",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must reach the knee for cultural sensitivity on community projects - quick-dry sports shorts with cargo pockets are ideal.",
        "lengths": "all"
      },
      {
        "item": "Socks (walking + normal)",
        "quantity": "3-4x walking, 4x normal",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring a mix of walking socks (for trek and long days on your feet) and normal cotton socks (cooler, for evenings).",
        "lengths": "all"
      },
      {
        "item": "Underwear",
        "quantity": "4-7",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring enough to last the Expedition, plus a spare set to leave at Field Base. Dark colours hide dirt better.",
        "lengths": "all"
      },
      {
        "item": "Bras (sports bra recommended)",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Sports bras are generally found to be more comfortable for active days.",
        "lengths": "all"
      },
      {
        "item": "Work / garden gloves",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Hard-wearing gloves for manual work on project sites - available cheaply from hardware stores or supermarkets.",
        "lengths": "all"
      },
      {
        "item": "Hat (wide brimmed)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A wide brim protects your face and neck from sun and rain.",
        "lengths": "all"
      },
      {
        "item": "Lightweight waterproof jacket",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A lightweight waterproof jacket or poncho for wet weather - jackets are more practical, ponchos cover more of your kit but restrict movement.",
        "lengths": "all"
      },
      {
        "item": "Swimming costume / bikini / rash vest",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Needed for washing in rivers/streams as well as any swimming. Board shorts or a costume with a T-shirt over the top may be more culturally appropriate on projects.",
        "lengths": "all"
      },
      {
        "item": "Other shoes (trainers / flip flops / crocs)",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Comfortable alternatives to boots/sandals for relaxing at Field Base, e.g. trainers or flip flops.",
        "lengths": "all"
      },
      {
        "item": "Set of clothes for field base / travelling",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Worth having one clean, presentable outfit for changeovers, community events, and travel days.",
        "lengths": "all"
      }
    ],
    "legacies": [
      {
        "item": "Rucksack (65-85 Litres)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "This is a key bit of equipment, especially during trek when you'll carry 15-25kg of group kit. Look for: top-loading (a side-loading 'travel pack' won't support your back properly), 65-85 litre capacity depending on your body size, an adjustable back length, and comfortable, padded straps. This needs to fit ALL your kit inside it, so it's worth investing in a good one rather than borrowing an old or ill-fitting bag.",
        "lengths": "all"
      },
      {
        "item": "Day bag",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Essential for carrying sunscreen, water bottle etc. to the project site each day, and doubles as your hand luggage on flights. An old school/college bag is fine - no need to buy new.",
        "lengths": "all"
      },
      {
        "item": "Sleeping bag (2-3 seasons)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Choose a synthetic bag (down bags are harder to dry and deteriorate in humid conditions). Comfort rating should suit the destination's temperature range - ask us if unsure. You'll be sleeping in this most nights of the Expedition.",
        "lengths": "all"
      },
      {
        "item": "Sleeping bag liner",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Keeps your sleeping bag clean and is far easier to wash. A cheap DIY option: fold a cotton sheet in half lengthways and stitch the long sides together, or use an old single duvet cover.",
        "lengths": "all"
      },
      {
        "item": "Roll / sleeping mat",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Full-length mats are best - remember you'll be sleeping on this for weeks. Foam mats are cheap (under GBP5); self-inflating mats are comfier but pricier and can puncture (bring a repair kit if so).",
        "lengths": "all"
      },
      {
        "item": "Dry bags & rucksack liner",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Waterproof bags you pack inside your rucksack to keep kit dry. Bring 2-3 in a mix of sizes - one small (camera/notepad), one larger (sleeping bag/clothes change). A rucksack liner is an alternative and should match your rucksack's capacity.",
        "lengths": "all"
      },
      {
        "item": "Water containers",
        "quantity": "2-3 (3 litres min)",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a mix of hard bottles and collapsible containers to carry at least 3 litres. Collapsible containers pack down small when empty. You'll always be asked to drink purified water on Expedition (1 puritab = 1 litre).",
        "lengths": "all"
      },
      {
        "item": "Head torch + spare batteries",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Essential as there's rarely electricity on project sites - keeps your hands free. Bring at least one set of spare batteries. LED bulbs use less power, and a red-light setting attracts fewer insects at night. Worth packing a cheap backup hand torch too.",
        "lengths": "all"
      },
      {
        "item": "Mess tin / bowl",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A square metal container with a handle, used as a bowl for eating on placement. Available from camping shops, or bring a metal plate/bowl from home.",
        "lengths": "all"
      },
      {
        "item": "Mug",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "For hot drinks (tea, coffee etc). An old mug from home is fine - a small thermos/flask also works well.",
        "lengths": "all"
      },
      {
        "item": "Cutlery (K/F/S)",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a knife, fork and spoon - a set from home is fine. Camping 'sporks' can be flimsy and may need replacing.",
        "lengths": "all"
      },
      {
        "item": "Sunglasses",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "It's likely to be bright and sunny - make sure lenses have effective UV protection. A hard case is worth bringing.",
        "lengths": "all"
      },
      {
        "item": "Prescription glasses",
        "quantity": "1 (plus spare)",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Bring a spare pair if possible, both in hard cases. Contact lenses are not permitted due to higher infection risk in a dirtier environment.",
        "lengths": "all"
      },
      {
        "item": "Toiletries & wash stuff",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Hygiene is crucial on Expedition. Bring the essentials, with opportunities to restock certain items (e.g. toothpaste) during changeovers.",
        "lengths": "all"
      },
      {
        "item": "Towel",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Lightweight, compact, quick-drying travel towels are recommended over a normal cotton towel. A sarong is a popular lightweight alternative that doubles as a blanket.",
        "lengths": "all"
      },
      {
        "item": "Watch with an alarm (if not taking a phone)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "There'll be early starts, so a watch with an alarm is handy. If you're bringing a phone to use as your watch/camera, you can leave this at home.",
        "lengths": "all"
      },
      {
        "item": "Powerbank (20,000mAh)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for topping up a phone or camera where charging points are limited on placement - a 20,000mAh bank will typically manage 4-5 full phone charges.",
        "lengths": "all"
      },
      {
        "item": "Photocopies of key documents",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Keep copies of your passport photo page, vaccination dates, bank/card emergency contacts, insurance policy and emergency contact number, and a spare flight e-ticket, separate from the originals in case anything is lost or stolen.",
        "lengths": "all"
      },
      {
        "item": "Water purification tablets",
        "quantity": "15",
        "category": "essential",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Each group is given purification droplets/tablets for large quantities of water, but you need your own small personal supply for emergencies. Cheap chlorine-based puritabs can be bought online.",
        "lengths": "all"
      },
      {
        "item": "Pen knife or multi-tool",
        "quantity": "1 (blade under 2 inches)",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Handy for general use - an inexpensive multi-tool with a blade under 2 inches, can opener and scissors is ideal. Must go in hold luggage, not hand luggage.",
        "lengths": "all"
      },
      {
        "item": "Travel holdall / rucksack cover bag",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A lightweight cover bag that protects your rucksack's straps during flights and can be padlocked for extra security. Make sure its capacity is bigger than your rucksack. Can be left at Field Base during trek.",
        "lengths": "all"
      },
      {
        "item": "Camera",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A nice way to capture memories from the trip - your phone camera works just as well if you'd rather not carry a separate device.",
        "lengths": "all"
      },
      {
        "item": "Mosquito net",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Reduces the risk of insect-borne illness while sleeping. A box-shaped net is easiest to put up since it attaches at all four corners. It must be pre-treated with permethrin - buy a treatment bottle separately if using an old/untreated net.",
        "lengths": "all"
      },
      {
        "item": "Trekking poles",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A matter of personal preference - some Participants find these help on steep or uneven ground. A sturdy stick picked up locally works just as well.",
        "lengths": "all"
      },
      {
        "item": "Playing cards / games",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Great for filling downtime in the evenings and bonding with the team.",
        "lengths": "all"
      },
      {
        "item": "Journal / pen / pencil / paper",
        "quantity": "1 set",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful for notes during training and project planning, and for keeping entertained when there's no phone signal. Bring writing paper so you can write home too.",
        "lengths": "all"
      },
      {
        "item": "Spare laces",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "Useful backup in case your boot laces break mid-Expedition. Take up almost no space.",
        "lengths": "all"
      },
      {
        "item": "Inflatable pillow",
        "quantity": "1",
        "category": "optional",
        "subcategory": "personal",
        "cycle": "all",
        "description": "A small luxury - a dry bag stuffed with clothes or your fleece works just as well if you'd rather save the space.",
        "lengths": "all"
      },
      {
        "item": "Soap",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Basic hygiene essential - try to bring biodegradable or eco-friendly options where possible.",
        "lengths": "all"
      },
      {
        "item": "Shampoo / conditioner",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Shampoo/conditioner bars take up minimal space and are more eco-friendly than bottles - available from stores like LUSH or Holland & Barrett.",
        "lengths": "all"
      },
      {
        "item": "Toothbrush",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Standard hygiene essential for the whole Expedition.",
        "lengths": "all"
      },
      {
        "item": "Toothpaste",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "You can usually restock this during changeovers in town if you run low.",
        "lengths": "all"
      },
      {
        "item": "Deodorant",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Choose unscented or low-fragrance options where possible, as strong scents can attract insects.",
        "lengths": "all"
      },
      {
        "item": "Insect repellent",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Look for a strong DEET concentration - this can be expensive or hard to find in-country, so bring enough for the full Expedition. Bring it regardless of cycle - still needed throughout.",
        "lengths": "all"
      },
      {
        "item": "Sunscreen / sunblock (min. 30 SPF)",
        "quantity": "1 x 200ml",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "Minimum SPF30 (or SPF50 in tropical climates) - sunscreen can be pricey to buy locally, so pack enough to last, especially for the trek phase.",
        "lengths": "all"
      },
      {
        "item": "Eco-friendly laundry wash bar / gel",
        "quantity": "1",
        "category": "essential",
        "subcategory": "toiletries",
        "cycle": "all",
        "description": "An eco-friendly wash bar or gel lets you hand-wash clothes on project without harming local water sources.",
        "lengths": "all"
      },
      {
        "item": "Oral rehydration sachets",
        "quantity": "10",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Sachets like Dioralyte help you rehydrate quickly if you're unwell in the heat or after a stomach bug.",
        "lengths": "all"
      },
      {
        "item": "Pain relief tablets (paracetamol/ibuprofen)",
        "quantity": "1 packet",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Standard paracetamol/ibuprofen for headaches, muscle aches and minor pain.",
        "lengths": "all"
      },
      {
        "item": "Blister plasters",
        "quantity": "Min 10 large",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Specialist plasters that cushion and protect blisters, particularly important during the trek phase when you'll be walking long distances daily.",
        "lengths": "all"
      },
      {
        "item": "Zinc oxide tape (min 5cm wide)",
        "quantity": "1 roll",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Tape used to protect feet from blisters (often applied before trek) and for general strapping/repairs.",
        "lengths": "all"
      },
      {
        "item": "Plasters",
        "quantity": "1 packet",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Standard plasters for minor cuts and grazes.",
        "lengths": "all"
      },
      {
        "item": "Anti-fungal foot powder",
        "quantity": "20-50ml/g",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Helps keep feet dry to prevent fungal infections like athlete's foot, especially useful in hot, humid conditions.",
        "lengths": "all"
      },
      {
        "item": "Antiseptic spray / cream",
        "quantity": "50-100ml or 1 tube",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For cleaning cuts and grazes to prevent infection before dressing them.",
        "lengths": "all"
      },
      {
        "item": "Hand sanitiser / gel",
        "quantity": "250ml bottle",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Important for hygiene where handwashing facilities may be limited on project sites.",
        "lengths": "all"
      },
      {
        "item": "Antihistamine tablets",
        "quantity": "1 pack",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "For allergic reactions and insect bites/stings.",
        "lengths": "all"
      },
      {
        "item": "Antihistamine or hydrocortisone 1% cream",
        "quantity": "1 tube",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "A topical cream to relieve itching and irritation from insect bites.",
        "lengths": "all"
      },
      {
        "item": "Prescription medication / EpiPens",
        "quantity": "Enough for Expedition + 1 week",
        "category": "essential",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Bring enough for the full Expedition plus extra time in case of travel delays or lost/damaged medication. Let the Expedition Team know in advance if you're taking prescription medication.",
        "lengths": "all"
      },
      {
        "item": "Scissors",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Small first aid scissors for cutting tape, plasters or clothing in an emergency.",
        "lengths": "all"
      },
      {
        "item": "Tweezers",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Useful for removing splinters, thorns or ticks.",
        "lengths": "all"
      },
      {
        "item": "Conforming bandage (100mm)",
        "quantity": "2",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "A conforming bandage for securing dressings or supporting minor sprains.",
        "lengths": "all"
      },
      {
        "item": "Vaseline",
        "quantity": "1 small tub (20g)",
        "category": "recommended",
        "subcategory": "firstaid",
        "cycle": "all",
        "description": "Useful for chafing, dry lips and minor skin protection - a small tin is enough.",
        "lengths": "all"
      },
      {
        "item": "Walking boots (broken in)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A key investment alongside your rucksack - make sure boots are comfortable, offer ankle support, and are broken in with several short walks (up to 5 miles) before you arrive. Avoid Timberland/Caterpillar-style work boots as they're not suitable for hiking.",
        "lengths": "all"
      },
      {
        "item": "Sandals (toe and ankle straps)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must have toe and ankle straps to stay on your feet and dry out easily - used for washing and river crossings. Crocs with a closed toe are a good choice in jungle environments to keep insects off your feet.",
        "lengths": "all"
      },
      {
        "item": "Long sleeved tops / shirts",
        "quantity": "2",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Worn at dusk and dawn to protect against mosquitoes, and during the day for sun protection. Lightweight, quick-dry fabric is ideal. You'll need an extra one during Cycle 2, when it's cooler.",
        "lengths": "all"
      },
      {
        "item": "T-shirts",
        "quantity": "3-4",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must cover the shoulders and dry quickly - old, cheap tops work just as well as expensive brands.",
        "lengths": "all"
      },
      {
        "item": "Fleece / jumper",
        "quantity": "2",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Temperatures drop at night and in the mornings, especially at altitude or in the jungle - fleece dries faster than a thick hoody and is also useful for travel days. You'll need an extra one during Cycle 2, when it's cooler.",
        "lengths": "all"
      },
      {
        "item": "Warm jacket",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "An extra warm layer needed only for the cooler cycle - pack this in addition to your fleece if travelling during that period.",
        "lengths": "all"
      },
      {
        "item": "Thermal leggings & top",
        "quantity": "1 set",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A base layer for cold nights and mornings during the cooler cycle - not required for warmer cycles.",
        "lengths": "all"
      },
      {
        "item": "Trousers",
        "quantity": "2",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring at least one pair suited to trekking (quick-dry hiking trousers) and a lighter pair for relaxing at Field Base. Avoid jeans on project - they're too hot and slow to dry. Zip-off trousers that convert to shorts save packing space.",
        "lengths": "all"
      },
      {
        "item": "Shorts",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Must reach the knee for cultural sensitivity on community projects - quick-dry sports shorts with cargo pockets are ideal.",
        "lengths": "all"
      },
      {
        "item": "Socks (walking + normal)",
        "quantity": "3x walking, 3-4x normal",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring a mix of walking socks (for trek and long days on your feet) and normal cotton socks (cooler, for evenings).",
        "lengths": "all"
      },
      {
        "item": "Underwear",
        "quantity": "3-4",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Bring enough to last the Expedition, plus a spare set to leave at Field Base. Dark colours hide dirt better.",
        "lengths": "all"
      },
      {
        "item": "Bras",
        "quantity": "2-3",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Sports bras are generally found to be more comfortable for active days.",
        "lengths": "all"
      },
      {
        "item": "Hat (wide brimmed)",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A wide brim protects your face and neck from sun and rain.",
        "lengths": "all"
      },
      {
        "item": "Lightweight waterproof jacket",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A lightweight waterproof jacket or poncho for wet weather - jackets are more practical, ponchos cover more of your kit but restrict movement.",
        "lengths": "all"
      },
      {
        "item": "Swimming costume / bikini",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Needed for washing in rivers/streams as well as any swimming. Board shorts or a costume with a T-shirt over the top may be more culturally appropriate on projects.",
        "lengths": "all"
      },
      {
        "item": "Buff",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A versatile piece of neck/head wear useful for sun and dust protection.",
        "lengths": "all"
      },
      {
        "item": "Warm hat",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "A warm hat for cold mornings and evenings during the cooler cycle.",
        "lengths": "all"
      },
      {
        "item": "Gloves",
        "quantity": "1",
        "category": "essential",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Warm gloves useful for cold mornings and evenings.",
        "lengths": "all"
      },
      {
        "item": "Other shoes (trainers / flip flops)",
        "quantity": "1",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Comfortable alternatives to boots/sandals for relaxing at Field Base, e.g. trainers or flip flops.",
        "lengths": "all"
      },
      {
        "item": "Set of clothes for field base / travelling",
        "quantity": "1-2",
        "category": "recommended",
        "subcategory": "clothing",
        "cycle": "all",
        "description": "Worth having one clean, presentable outfit for changeovers, community events, and travel days.",
        "lengths": "all"
      }
    ]
  }
};
