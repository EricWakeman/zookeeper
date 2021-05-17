import { Alpaca } from "./models/Alpaca.js"
import { Bear } from "./models/Bear.js"
import { Cheetah } from "./models/Cheetah.js"
import { Dolphin } from "./models/Dolphin.js"
import { Elephant } from "./models/Elephant.js"
import { Flamingo } from "./models/Flamingo.js"
import { Giraffe } from "./models/Giraffe.js"
import { Hippo } from "./models/Hippo.js"
import { Ibex } from "./models/Ibex.js"
import { Jackal } from "./models/Jackal.js"
import { Kangaroo } from "./models/Kangaroo.js"
import { Lion } from "./models/Lion.js"
import { Manatee } from "./models/Manatee.js"
import { Narwhal } from "./models/Narwhal.js"
import { Octopus } from "./models/Octopus.js"
import { Platypus } from "./models/Platypus.js"
import { Quokka } from "./models/Quokka.js"
import { Rhino } from "./models/Rhino.js"
import { Serval } from "./models/Serval.js"
import { Tiger } from "./models/Tiger.js"
import { Uromastyx } from "./models/Uromastyx.js"
import { Vulture } from "./models/Vulture.js"
import { Wolverine } from "./models/Wolverine.js"
import { Xenarthra } from "./models/Xenarthra.js"
import { Yak } from "./models/Yak.js"
import { Zebra } from "./models/Zebra.js"

let herbivores = []
let carnivores = []
let omnivores = []


let abigail = new Alpaca('abigail', 'female,', 'blonde', 'two years', 125, 2, true)
let benjamin = new Bear('benjamin', 'male', 'black', 'five years', 200, 15, true)
let charlie = new Cheetah('charlie', 'male', 'yellow', 'three years', 78, 5, true)
let denise = new Dolphin('denise', 'female', 'gray', 'ten years', 700, 18, true)
let esther = new Elephant('esther', 'female', 'gray', 'twenty-five years', 12580, 375, true)
let franklin = new Flamingo('franklin', 'male', 'pink', 'twenty-one years', 5, 0.59, true)
let greg = new Giraffe('greg', 'male', 'yellow', 'sixteen years', 1750, 72, true)
let helga = new Hippo('helga', 'female', 'lavender', 'thirty-seven years', 3500, 90, true)
let igor = new Ibex('igor', 'male', 'brown', 'ten years', 152, 22, true)
let justine = new Jackal('justine', 'male', 'red', 'eight years', 20, 1, true)
let kevin = new Kangaroo('kevin', 'male', 'red', 'seventeen years', 105, 3, true)
let luna = new Lion('luna', 'female', 'tan', 'six years', 275, 10, true)
let martin = new Manatee('martin', 'male', 'gray', 'forty-eight years', 994, 99, true)
let nathan = new Narwhal('nathan', 'male', 'white', 'twenty-four years', 2200, 68, true)
let ophelia = new Octopus('ophelia', 'female', 'orange', 'two years', 54, 1, true)
let petunia = new Platypus('petunia', 'female', 'brown', 'ten years', 4, 0.8, true)
let quinn = new Quokka('quinn', 'male', 'brown', 'seven years', 6, 0.5, true)
let reina = new Rhino('reina', 'female', 'gray', 'thirty-two years', 5000, 115, true)
let stevo = new Serval('stevo', 'male', 'yellow', 'five years', 20, 2, true)
let tina = new Tiger('tina', 'female', 'orange', 'seven years', 530, 17, true)
let ursula = new Uromastyx('ursula', 'female', 'red', 'three years', 1, 0.2, true)
let vincent = new Vulture('vincent', 'male', 'black', 'five years', 20, 6, true)
let wilford = new Wolverine('wilford', 'male', 'black', 'six years', 40, 0.5, true)
let xavier = new Xenarthra('xavier', 'male', 'black', 'nine years', 80, 0.3, true)
let yollanda = new Yak('yollanda', 'female', 'black', 'twelve years', 900, 44, true)
let zane = new Zebra('zane', 'male', 'white', 'eighteen years', 780, 23, true)


herbivores.push(abigail, esther, greg, helga, igor, kevin, martin, quinn, reina, ursula, yollanda, zane)
carnivores.push(charlie, denise, franklin, luna, nathan, ophelia, petunia, stevo, tina, vincent, xavier)
omnivores.push(benjamin, justine, wilford)