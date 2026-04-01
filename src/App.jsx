import React, { useEffect, useMemo, useState } from "react"
import { BookOpen, Clock3, FileText, Grid2X2, PenSquare, Play, RotateCcw, StopCircle, Upload } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

const TOTAL_PAGES = 239
const LOADED_PAGES = 239

const BATCHES = [
  { id: 1, label: "Batch 1", pages: "1–20", status: "Loaded" },
  { id: 2, label: "Batch 2", pages: "21–40", status: "Loaded" },
  { id: 3, label: "Batch 3", pages: "41–60", status: "Loaded" },
  { id: 4, label: "Batch 4", pages: "61–80", status: "Loaded" },
  { id: 5, label: "Batch 5", pages: "81–100", status: "Loaded" },
  { id: 6, label: "Batch 6", pages: "101–120", status: "Loaded" },
  { id: 7, label: "Batch 7", pages: "121–140", status: "Loaded" },
  { id: 8, label: "Batch 8", pages: "141–160", status: "Loaded" },
  { id: 9, label: "Batch 9", pages: "161–180", status: "Loaded" },
  { id: 10, label: "Batch 10", pages: "181–200", status: "Loaded" },
  { id: 11, label: "Batch 11", pages: "201–220", status: "Loaded" },
  { id: 12, label: "Batch 12", pages: "221–239", status: "Loaded" },
]

const MODULES = [
  { id: "essay", title: "Issue Task", pages: "9–19", status: "Ready" },
  { id: "tc", title: "Text Completions", pages: "41–60", status: "Live" },
  { id: "se", title: "Sentence Equivalence", pages: "61–71", status: "Live" },
  { id: "rc", title: "Logic RC", pages: "72–80", status: "Live" },
  { id: "practice", title: "Practice Sets", pages: "81–223", status: "Live" },
  { id: "quant", title: "Quantitative Reasoning", pages: "143–223", status: "Live" },
  { id: "vocab", title: "Vocabulary Review", pages: "224–238", status: "Live" },
]

const VOCAB_GROUPS = [
  {
    page: 224,
    range: "1–27",
    words: ["URBANE", "ANTITHESIS", "REDUNDANT", "FACETIOUS", "APLOMB", "THERAPEUTIC", "TRANSMUTE", "TRUNCATE", "ASCENT", "FIASCO", "PROLIFIC", "ASSUAGE", "PHLEGMATIC", "INTREPID", "LACONIC", "BOORISH", "ERUDITE", "ACRIMONIOUS", "PROTRACTED", "OBSEQUIOUS", "LOQUACIOUS", "PUGNACIOUS", "DEPLORE", "BANAL", "AMELIORATE", "CHARY", "ENIGMA"],
  },
  {
    page: 225,
    range: "28–54",
    words: ["INEPT", "PETULANT", "VAPID", "PROPRIETY", "SCRUPULOUS", "INVARIABLE", "ANTIPATHY", "FINITE", "ADROIT", "PROVISIONAL", "RECALCITRANT", "FASTIDIOUS", "ALACRITY", "ARDUOUS", "VACILLATE", "ASTUTE", "AUGMENT", "IMPUNITY", "LATENT", "OBDURATE", "BELLICOSE", "QUARRELSOME", "INCREDULOUS", "PLACATE", "COGNIZANT", "DISSONANCE", "IMMINENT"],
  },
  {
    page: 226,
    range: "55–81",
    words: ["RETICENT", "STIPULATE", "OSTRACIZE", "NEFARIOUS", "PAUCITY", "BLANDISH", "ASSIDUOUS", "AUSPICIOUS", "EXPUNGE", "IGNOMINY", "PERTINENT", "DISPARAGE", "DERISIVE", "DEBILITATE", "OPULENT", "EPITOME", "CAPRICIOUS", "SPECIOUS", "EXTIRPATE", "EQUIVOCAL", "BELIE", "RANCOR", "DILATORY", "RELEGATE", "TACIT", "SEDULOUS", "ADULATION"],
  },
  {
    page: 227,
    range: "82–108",
    words: ["SUBSEQUENT", "LASSITUDE", "ALTRUISTIC", "PERFIDIOUS", "MUNIFICENT", "PARSIMONIOUS", "ESOTERIC", "DEVIANT", "VENAL", "DEBACLE", "EPHEMERAL", "HISTRIONIC", "TRUCULENT", "INGENUOUS", "AVID", "ELUCIDATE", "ABERRATION", "PALLIATIVE", "BLATANT", "ACCRETION", "PERSPICACITY", "EXTRANEOUS", "OPAQUE", "NEGLIGENT", "CONTEST", "QUERY", "INSIDIOUS"],
  },
  {
    page: 228,
    range: "109–135",
    words: ["WISTFUL", "CURTAIL", "PAUCITY", "BURGEON", "INTREPID", "MERCURIAL", "UNSAVORY", "HAMPER", "CONTEND", "ALLEVIATE", "SOLACE", "PROCUREMENT", "CLICHÉ", "INSIPID", "DUBIOUS", "FACTION", "SPURIOUS", "BELLIGERENT", "DISSENSION", "BERATE", "INDULGE", "MEDITATE", "STAGNANT", "CURT", "OBFUSCATE", "ENMITY", "DELETERIOUS"],
  },
  {
    page: 229,
    range: "136–162",
    words: ["DERISION", "OSTENSIBLE", "ABHOR", "ZEALOT", "DEPLETE", "SPORADIC", "INSINUATE", "DIMINUTIVE", "ILLICIT", "APPREHENSIVE", "CONCUR", "BUOYANT", "SCANTY", "PUGNACIOUS", "NOVICE", "BOLSTER", "CREDULITY", "LITHE", "VACILLATE", "OBNOXIOUS", "ACCLAIM", "DEFER", "AFFABLE", "NEBULOUS", "SUPERFICIAL", "DISPARAGE", "LUDICROUS"],
  },
  {
    page: 230,
    range: "163–189",
    words: ["VITRIOLIC", "ADMONISH", "EPITOME", "STYMIE", "DECOROUS", "ACUTE", "SLOTH", "EULOGIZE", "INNOVATION", "PROPONENT", "REDUNDANT", "BEGRUDGING", "EMPATHY", "PRUDENT", "CONVOLUTED", "FERVOR", "REFUTE", "COMPLIANT", "APPEASE", "IRATE", "APPALL", "JUDICIOUS", "MOROSE", "DIFFUSE", "AMASS", "DISGRUNTLED", "PLACID"],
  },
  {
    page: 231,
    range: "190–216",
    words: ["DESPICABLE", "DERIDE", "ELUDE", "MUTABLE", "LEVITY", "MISCONSTRUE", "DESTITUTION", "MALIGN", "CONCORD", "EQUITABLE", "CONVIVIAL", "DOCILE", "IMPEDIMENT", "ADHERE", "CANDID", "CALLOUS", "ENHANCE", "SEDATE", "DISSENSION", "RUDIMENTARY", "COGENT", "CONCISE", "CONSTERNATION", "COLOSSAL", "DESICCATE", "ABSOLVE"],
  },
  {
    page: 232,
    range: "217–243",
    words: ["ZEALOUS", "AMBIVALENT", "REPUDIATE", "TENACIOUS", "SAGACITY", "SCRUPULOUS", "RESOLUTE", "INDOLENCE", "PRECARIOUS", "CASTIGATE", "DECRY", "PLETHORA", "GRUDGING", "TREMULOUS", "TERSE", "DISPERSE", "RECLUSE", "COMPLACENCY", "ABATE", "AGGRANDIZE", "INTIMIDATE", "LAUDABLE", "REPRESS", "DILIGENT", "ECCENTRICITY", "VINDICTIVE", "GRANDIOSE"],
  },
  {
    page: 233,
    range: "244–270",
    words: ["INCONGRUOUS", "FRUGAL", "MORIBUND", "CELESTIAL", "EMINENT", "PERCEIVE", "SUPPLANT", "PERENNIAL", "EMBELLISH", "IMPLEMENT", "ITINERANT", "ADVERSITY", "VALOR", "DISSUADE", "OSTENTATIOUS", "COVET", "VERBOSE", "FLIPPANT", "ACCLAMATION", "INCITE", "VOLATILE", "NONCHALANCE", "MEDIATE", "IRREVOCABLE", "ILLUSTRIOUS", "INTERMINABLE", "RECIPROCATE"],
  },
  {
    page: 234,
    range: "271–297",
    words: ["CLANDESTINE", "INCREDULITY", "TIMOROUS", "RECOIL", "INIMICAL", "VERACITY", "REPLETE", "DERISIVE", "ADVOCATE", "FUTILE", "INCESSANT", "DEBASED", "EXONERATE", "ASTUTE", "DISCREPANCY", "COPIOUS", "TENUOUS", "DEFT", "TEMERITY", "OBLIVIOUS", "PROFOUND", "ANACHRONISTIC", "CRUCIAL", "REBUKE", "IMPARTIAL", "VERSATILE", "FORTHRIGHT"],
  },
  {
    page: 235,
    range: "298–324",
    words: ["AFFABLE", "ORTHODOX", "ANTITHESIS", "TRANSITORY", "APPREHENSION", "AFFLUENT", "PACE", "ABSTAIN", "AUXILIARY", "PINNACLE", "BOORISH", "ENCOMPASS", "EFFACE", "THWART", "AMIABLE", "DEVOID OF", "INTIMATE", "SHROUDED", "EXPLOIT", "REPREHENSIBLE", "ROBUST", "INSCRUTABLE", "TENTATIVE", "HUMDRUM", "ESCHEW", "RELENTLESS", "CONCEDE"],
  },
  {
    page: 236,
    range: "325–351",
    words: ["ALACRITY", "CLAMOR", "CONVENTIONAL", "INDISPUTABLE", "FACILITATE", "REPULSE", "RIGOR", "COMPLIANT", "ERADICATE", "IRREVERENT", "PERNICIOUS", "EXHORT", "TURMOIL", "LATERAL", "BEGRUDGE", "BOLSTER", "INFRINGEMENT", "AGILE", "DIVERSIFY", "HAPLESS", "INDIGENOUS", "PROLOGUE", "ACKNOWLEDGE", "INDICTMENT", "LACKLUSTER", "ENTHRALL", "DIMINUTION"],
  },
  {
    page: 237,
    range: "352–378",
    words: ["WARY", "SUCCULENT", "SUBSIDE", "ABRIDGE", "APPREHEND", "IMPERATIVE", "FURTIVE", "OUST", "TOPPLE", "PREVAIL", "CREDENCE", "DIVULGE", "CHAGRIN", "TUMULT", "DEVASTATE", "BENEVOLENT", "UNOBTRUSIVE", "SCRUTINY", "HEINOUS", "GARRULOUS", "VIGILANCE", "HERETICAL", "COALESCE", "RESILIENCE", "TRANSGRESSION", "PRECOCIOUS", "OSCILLATE"],
  },
  {
    page: 238,
    range: "379–400",
    words: ["INEXORABLE", "PRESCIENT", "PREVARICATE", "DISTRESS", "MACABRE", "ABRASIVE", "VIRILE", "DEDUCE", "PANORAMIC", "ABDICATE", "RAUCOUS", "HIATUS", "PLENARY", "PERUSE", "EXPURGATE", "LIAISON", "SEDENTARY", "TORPOR", "URBANITY", "BEGUILE", "EMOLLIENT", "NOSTALGIC"],
  },
]

const DECKS = [
  {
    id: "tc",
    title: "Text Completions",
    minutes: 18,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "Although it is most frequently used as a spice, ginger also has ___ properties; it can be used to help treat coughs, colds, and upset stomachs.",
        options: ["healing", "edible", "injurious", "toxic", "detrimental"],
        answer: 0,
      },
      {
        id: 2,
        type: "single",
        prompt: "Galloping technological progress has made consumers ___; advances undreamed of a generation ago are so common that they seem humdrum.",
        options: ["flabbergasted", "miffed", "jaded", "wary", "astounded"],
        answer: 2,
      },
      {
        id: 3,
        type: "single",
        prompt: "Employees had become so inured to the caprices of top management's personnel policies that they greeted the announcement of a company-wide dress code with ___.",
        options: ["astonishment", "impassivity", "resentment", "apprehension", "confusion"],
        answer: 1,
      },
    ],
  },
  {
    id: "se",
    title: "Sentence Equivalence",
    minutes: 23,
    questions: [
      {
        id: 1,
        type: "multi",
        prompt: "While the colonists would eventually push westward, first they were in for a long, difficult winter, and the main challenge was to ___ the existing resources.",
        options: ["sell", "peddle", "steward", "upend", "husband", "procure"],
        answer: [2, 4],
      },
      {
        id: 2,
        type: "multi",
        prompt: "The music of the late 70s is often described as ___, despite the notable exception of a few innovators in the budding punk and hip-hop scenes.",
        options: ["derivative", "trite", "inspired", "visionary", "enigmatic", "cerebral"],
        answer: [0, 1],
      },
      {
        id: 3,
        type: "multi",
        prompt: "The bursts of gamma-ray radiation generated by the mergers of binary star systems are ___ in nature; scientists have found it difficult to collect meaningful data from such a brief time span.",
        options: ["expedient", "protracted", "transient", "mercurial", "fleeting", "celestial"],
        answer: [2, 4],
      },
    ],
  },
  {
    id: "rc",
    title: "Logic Based Reading Comprehension",
    minutes: 23,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "At the core of the marine food-supply passage is the idea that increasing food production on land can relieve pressure on marine ecosystems. Which choice best matches that implication?",
        options: [
          "Enabling more land to be used for development purposes",
          "Compromising progress toward conservation goals",
          "Helping protect comestible species from competition and predation",
          "Helping reduce pressure on marine ecosystems",
          "Helping restore the biodiversity of terrestrial ecosystems",
        ],
        answer: 3,
      },
      {
        id: 2,
        type: "single",
        prompt: "The fish-recognition passage argues mainly that laboratory evidence for individual recognition in free-ranging fish populations may be overstated. Which choice best captures that main point?",
        options: ["Resolving a controversy", "Describing a behavior", "Dismissing a theory", "Predicting a result", "Appraising an assumption"],
        answer: 4,
      },
      {
        id: 3,
        type: "single",
        prompt: "The submerged-tunnel passage states that bored tunnels are considered stable only if their depth under the seabed equals at least their diameter. What can be inferred?",
        options: [
          "They are the preferred option for shallow spans of water",
          "Their stability suffers if they are not built deeply enough",
          "The shape of their cross-sections cannot be rectangular",
          "They are always cheaper than immersed tubes",
          "They cannot carry railway lines",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "practice",
    title: "Verbal Practice Sets",
    minutes: 23,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "The salt-marsh passage discusses the standard view most likely in order to identify a view that is called into question by the chain of events described in the passage.",
        options: [
          "explains the occurrence of the chain of events described in the passage",
          "provides a summary of the chain of events described in the passage",
          "is called into question by the chain of events described in the passage",
          "advocates reassessment of the widely held belief described in the passage",
          "is undermined by the widely held belief described in the passage"
        ],
        answer: 2,
      },
      {
        id: 2,
        type: "multi",
        prompt: "While in many ways their personalities could not have been more different, she was ebullient where he was glum, relaxed where he was awkward, garrulous where he was ___; they were surprisingly well suited.",
        options: ["solicitous", "munificent", "vacillating", "laconic", "fastidious", "reticent"],
        answer: [3, 5],
      },
      {
        id: 3,
        type: "single",
        prompt: "The civil-litigation passage mentions the occupations of those involved in litigation in early modern England most likely in order to illustrate the wide range of people who used the civil legal system during that period.",
        options: [
          "suggest that most historians' assumptions about the participants in the civil legal system during that period are probably correct",
          "support the theory that more people participated in the civil legal system than the criminal legal system in England during that period",
          "counter the claim that legal issues reveal more about a country's ordinary citizens than about its elite",
          "illustrate the wide range of people who used the civil legal system in England during that period",
          "suggest that recent data on people who participated in early modern England's legal system may not be correct"
        ],
        answer: 3,
      },
      {
        id: 4,
        type: "single",
        prompt: "To judge whether Trancorp's plan will reduce shipping time, the most important thing to know is whether loading the freight cars onto barges is very time-consuming.",
        options: [
          "Whether transportation by train and barge would be substantially less expensive than transportation by truck",
          "Whether there are boats that can make the trip between the mainland and Burland faster than barges can",
          "Whether loading the freight cars onto barges is very time-consuming",
          "Whether the average number of vehicles traveling over the bridge into Burland has been relatively constant in recent years",
          "Whether most trucks transporting goods into Burland return to the mainland empty"
        ],
        answer: 2,
      },
      {
        id: 5,
        type: "single",
        prompt: "In the bee-color-vision passage, setting out new cards when replacing the sugar water with an empty dish rules out the possibility that the bees had somehow marked the blue card in previous trials.",
        options: [
          "was able to record accurately any changes in color that resulted from spills or drops",
          "could subtly alter the color of the card on which the sugar water was placed in each iteration of the experiment",
          "introduced new clues relevant to finding the sugar water's location",
          "succeeded in proving that bees see in only a limited spectrum of color",
          "was able to rule out the possibility that the bees had somehow marked the blue card in previous trials"
        ],
        answer: 4,
      },
      {
        id: 6,
        type: "single",
        prompt: "Biologists suggest that the synchrony in snowshoe hare population cycles can be explained in part by predators' ability to change the areas in which they hunt.",
        options: [
          "Their regularity is due to the persistent threat of malnourishment that young hares face",
          "They are similar in length to those of other species of hare",
          "Their synchrony can be partly explained by the ability of predators to change the areas in which they hunt",
          "Their variation from region to region is partly due to regional differences in the availability of alternate prey for predators",
          "Their regularity is due to the constant availability of the food sources hares rely on"
        ],
        answer: 2,
      },
      {
        id: 7,
        type: "multi",
        prompt: "In one commentator's view, modern free traders are complete ___ because they show no interest in practicality, nuance, or flexibility on the issue of free trade.",
        options: ["ideologues", "cynics", "zealots", "simpletons", "hypocrites", "phonies"],
        answer: [0, 2],
      },
      {
        id: 8,
        type: "multi",
        prompt: "Congress is having great difficulty developing a consensus on energy policy, primarily because the policy objectives of various members of Congress rest on such ___ assumptions.",
        options: ["commonplace", "disparate", "divergent", "fundamental", "trite", "trivial"],
        answer: [1, 2],
      },
    ],
  },
  {
    id: "quant",
    title: "Quant Practice Set 1",
    minutes: 35,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "D is the decimal form of 4/11. Compare Quantity A, the 25th digit to the right of the decimal point of D, with Quantity B, 4.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 2,
        type: "single",
        prompt: "If x^2y > 0 and xy^2 < 0, compare Quantity A, x, with Quantity B, y.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 3,
        type: "single",
        prompt: "Today, the price of a table was reduced by 20 percent from what it was yesterday and the price of a lamp was reduced by 30 percent from what it was yesterday. Compare the dollar amount of the reduction of the table with the dollar amount of the reduction of the lamp.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 3,
      },
      {
        id: 4,
        type: "single",
        prompt: "n is a negative even integer. Compare Quantity A, (1/3)^n, with Quantity B, (-3)^n.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 5,
        type: "single",
        prompt: "If x(x − 2) / ((x + 3)(x − 4)^2) = 0, compare Quantity A, x, with Quantity B, −2.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 6,
        type: "single",
        prompt: "If |n + 1| < 5, compare Quantity A, n, with Quantity B, −5.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 3,
      },
      {
        id: 7,
        type: "single",
        prompt: "The sale price of an electronic item is 25 percent less than the list price and 40 percent greater than the wholesale price. If the wholesale price is $30, what is its list price?",
        options: ["$52", "$53", "$54", "$55", "$56"],
        answer: 4,
      },
      {
        id: 8,
        type: "single",
        prompt: "How many integers are solutions of the inequality x^2 − 10 < 0?",
        options: ["Three", "Four", "Six", "Seven", "Ten"],
        answer: 3,
      },
      {
        id: 9,
        type: "single",
        prompt: "Books are sold either at $10 or at $6 each, and after all books are sold, the average revenue is $9 per book. What is the ratio of the number of $10 books sold to the number of $6 books sold?",
        options: ["1 : 3", "1 : 2", "1 : 1", "2 : 1", "3 : 1"],
        answer: 4,
      },
      {
        id: 10,
        type: "single",
        prompt: "If the distance from New York to Boston is 250 miles and the distance from New York to Hartford is 100 miles, what percentage of the distance from New York to Boston is the distance from New York to Hartford?",
        options: ["12", "24", "36", "40", "250"],
        answer: 3,
      },
      {
        id: 11,
        type: "single",
        prompt: "A company reduces the number of hours its employees work from 40 hours per week to 36 hours per week while continuing to pay the same weekly wages. If the hourly rate after the reduction in working hours is x dollars per hour, how much is the current hourly rate?",
        options: ["1/10", "x/9", "9x/10", "10x/9", "9x/2"],
        answer: 2,
      },
    ],
  },
  {
    id: "quant-review-2",
    title: "Quant Review Set 2",
    minutes: 26,
    questions: [
      {
        id: 1,
        type: "multi",
        prompt: "In the figure above, the line passes through the origin of the xy-plane. If m > 1, which of the following is a possible degree measurement for the angle θ?",
        options: ["35°", "50°", "85°", "120°"],
        answer: [1, 2],
      },
      {
        id: 2,
        type: "multi",
        prompt: "A flat, rectangular flower bed has an area of 2,400 square feet and is bordered by a fence on three sides and by a walkway on the fourth side. If the total fence length is 140 feet, which side lengths could be the measure of one side of the flower bed?",
        options: ["20", "30", "40", "50", "60", "80"],
        answer: [1, 2, 4, 5],
      },
      {
        id: 3,
        type: "multi",
        prompt: "Line m passes through the origin O and intersects line segment AB between A and B. If point (8, 3) lies on line l, which of the following could be a slope of line m?",
        options: ["1/16", "1/8", "1/4", "1/2"],
        answer: [0, 1, 2],
      },
      {
        id: 4,
        type: "single",
        prompt: "In the parallelogram figure, diagonal AC splits angle A into x° and (x − 20)°. Angle B is (2x)°. What is the number of degrees in angle B?",
        options: ["80", "90", "100", "110", "120"],
        answer: 2,
      },
      {
        id: 5,
        type: "single",
        prompt: "In the xy-plane, quadrilateral ABCD has vertices A(0, 0), B(0, 3), C(5, 5), and D(4, 0). What is the area of quadrilateral ABCD?",
        options: ["16.5", "17", "17.5", "18", "18.5"],
        answer: 2,
      },
      {
        id: 6,
        type: "single",
        prompt: "In the xy-plane, the line with equation y = -1/2 x + 3 passes through the point (c, -c). What is the value of c?",
        options: ["-6", "-3", "3", "6", "12"],
        answer: 0,
      },
      {
        id: 7,
        type: "multi",
        prompt: "A random sample of 21 fish lengths includes one erroneous value of 24 inches. Which statistical characteristics change if the 24-inch measurement is removed from the data?",
        options: ["The mean", "The median", "The standard deviation", "The range"],
        answer: [0, 2, 3],
      },
      {
        id: 8,
        type: "multi",
        prompt: "The six numbers 3.7, 4.1, a, 8.5, 9.2, and 2a are listed in increasing order. Which of the following could be the range of the six numbers?",
        options: ["4.0", "5.2", "7.3", "11.6", "12.9", "14.1"],
        answer: [2, 3, 4],
      },
      {
        id: 9,
        type: "multi",
        prompt: "Set A has 50 members and set B has 53 members. At least 2 of the members in set A are not in set B. Which of the following could be the number of members in set B that are not in set A?",
        options: ["3", "5", "50", "53"],
        answer: [1, 2, 3],
      },
      {
        id: 10,
        type: "single",
        prompt: "A list of 42 numbers has an average of 110.0 and a second list of 58 numbers has an average of 150.0. What is the average of the 100 numbers in the two lists combined?",
        options: ["130.0", "132.0", "133.2", "135.0", "140.0"],
        answer: 2,
      },
      {
        id: 11,
        type: "single",
        prompt: "The table shows that 610 families own at least 2 cars and 250 families own at least 3 cars. How many families own exactly 2 cars?",
        options: ["250", "285", "300", "360", "610"],
        answer: 3,
      },
      {
        id: 12,
        type: "single",
        prompt: "In an increasing sequence of 10 consecutive integers, the average of the first five integers is 167. What is the average of the last five integers?",
        options: ["168", "169", "170", "171", "172"],
        answer: 4,
      },
    ],
  },
  {
    id: "quant-practice-2",
    title: "Quant Practice Set 2",
    minutes: 28,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "Points R, S, and T lie on the number line such that S is between R and T. The distance between R and S is 6, and the distance between R and T is 15. Compare Quantity A, the distance between the midpoints of RS and ST, with Quantity B, the distance between S and T.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 2,
        type: "single",
        prompt: "S is a set of 12 numbers, of which 4 are negative, 4 are positive, and 4 are zero. Compare the average of the numbers in S with the median of the numbers in S.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 3,
      },
      {
        id: 3,
        type: "single",
        prompt: "If x = (z − 1)^2 and y = (z + 1)^2, compare the average of x and y with z^2.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 4,
        type: "single",
        prompt: "The radius of circle A is 12 greater than the radius of circle B. Compare the difference between the circumference of circle A and the circumference of circle B with 72.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 5,
        type: "single",
        prompt: "If x and y are positive integers and x^3 y^4 = 2,000, which of the following is the value of xy?",
        options: ["2", "4", "8", "10", "20"],
        answer: 3,
      },
      {
        id: 6,
        type: "single",
        prompt: "A table groups student heights from 140–144 cm through 160–164 cm. What is the least possible range of the heights listed in the table?",
        options: ["13", "16", "20", "24", "28"],
        answer: 1,
      },
      {
        id: 7,
        type: "single",
        prompt: "A rectangular garden patio has perimeter 42 metres, and its width is 75% of its length. What is the area of the patio in square metres?",
        options: ["40.5", "96", "108", "192", "432"],
        answer: 2,
      },
      {
        id: 8,
        type: "multi",
        prompt: "Inspector A checks every 3rd chair beginning with the 3rd chair, and Inspector B checks every 5th chair beginning with the 5th chair. If 95 chairs come down the ramp, which of the following chairs are not checked by either inspector?",
        options: ["the 14th chair", "the 15th chair", "the 54th chair", "the 55th chair", "the 74th chair", "the 75th chair", "the 94th chair", "the 95th chair"],
        answer: [0, 4, 6],
      },
      {
        id: 9,
        type: "multi",
        prompt: "Points A and B are on the x-axis at (1, 0) and (6, 0). Point C is above the x-axis and triangle ABC has area 10. Which of the following could be the coordinates of point C?",
        options: ["(0, 4)", "(1, 3)", "(2, 5)", "(3, 4)", "(12, 4)", "(3, -4)"],
        answer: [0, 3, 4],
      },
      {
        id: 10,
        type: "single",
        prompt: "A doctor prescribed 18 cubic centimetres of a drug to a patient whose body weight was 120 pounds. If the typical dosage is 2 cubic centimetres per 15 pounds, by what percent was the prescribed dosage greater than the typical dosage?",
        options: ["10", "12.5", "15", "18.75", "25"],
        answer: 1,
      },
      {
        id: 11,
        type: "multi",
        prompt: "In a sequence of positive integers, each term after the first is found by multiplying the preceding term by 2 and subtracting 3. If the fourth term is 19, which of the following numbers are in the sequence?",
        options: ["5", "11", "16", "22", "35", "67"],
        answer: [0, 1, 4, 5],
      },
      {
        id: 12,
        type: "single",
        prompt: "Two functions are defined by f(x) = |2x + 1| and g(x) = 3. If f(n) = g(n), what is the smallest possible value of n?",
        options: ["-2", "-1", "0", "1", "2"],
        answer: 0,
      },
      {
        id: 13,
        type: "single",
        prompt: "Annual greeting-card revenue rose from 4.50 billion dollars in 2018 to 5.75 billion dollars in 2021, with yearly values of 4.95 and 5.15 billion in between. Approximately what was the average annual percent increase from 2018 to 2021?",
        options: ["7%", "9%", "17%", "28%", "39%"],
        answer: 1,
      },
      {
        id: 14,
        type: "single",
        prompt: "In 2021, the average price per greeting card for all greeting cards sold was $1.25. If 5.75 billion dollars of revenue came from 4.6 billion total cards, and 3.9 billion cards were sold for the ten occasions shown, approximately how many cards were sold for occasions other than those ten?",
        options: ["1 billion", "700 million", "200 million", "70 million", "20 million"],
        answer: 1,
      },
      {
        id: 15,
        type: "single",
        prompt: "The circumference of circle C is 2π^2. Compare Quantity A, the area of circle C, with Quantity B, 27.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 16,
        type: "single",
        prompt: "A circular region has circumference c inches and area k square inches. If c = 3k, what is the radius of the circle in inches?",
        options: ["√2/3", "√(2/3)", "2/3", "4π/9", "2π/3"],
        answer: 2,
      },
      {
        id: 17,
        type: "single",
        prompt: "A racetrack consists of a rectangle whose length is twice its width, with a semicircle of radius r attached to each short side. What is the perimeter of the track in terms of r?",
        options: ["2r(π + 2)", "2r(π + 4)", "2r(π + 8)", "4r(π + 2)", "4r(π + 4)"],
        answer: 1,
      },
    ],
  },
  {
    id: "quant-mixed-183-187",
    title: "Quant Mixed Set 183–187",
    minutes: 26,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "Compare Quantity A, (x + 4)(y + 3), with Quantity B, (x + 3)(y + 4).",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 3,
      },
      {
        id: 2,
        type: "single",
        prompt: "r and t are consecutive positive integers, and p = r^2 + t. Compare Quantity A, (-1)^p, with Quantity B, (-1)^(p + 1).",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 3,
        type: "single",
        prompt: "A jar contains 10 red marbles and 10 blue marbles. Two marbles are chosen at random without replacement. Compare Quantity A, the probability that both marbles have different colors, with Quantity B, 1/2.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 4,
        type: "single",
        prompt: "Compare the area of an isosceles triangle that has one right angle and two sides of length 2 with the area of an equilateral triangle that has sides of length 2.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 5,
        type: "single",
        prompt: "Account M earns 4.3% interest, compounded annually, and Account N earns 2.9% interest, compounded annually. An account of each type is opened on the same day. Compare the interest earned by depositing $X in account M for 6 years with the interest earned by depositing $X in account N for 9 years.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 6,
        type: "single",
        prompt: "The greatest integer of a list of 21 positive integers is 16, and the median value is 10. What is the least possible average of the 21 integers?",
        options: ["4", "5", "6", "7", "8"],
        answer: 2,
      },
      {
        id: 7,
        type: "single",
        prompt: "If x and y are positive integers and x = (2)(3)(5)(7)(11)(13)(17)(19) / (39y), which of the following could be the value of y?",
        options: ["91", "105", "119", "121", "143"],
        answer: 2,
      },
      {
        id: 8,
        type: "single",
        prompt: "Which of the following lines in the xy-plane does not contain any point with integers as both coordinates?",
        options: ["y = x", "y = x + 1/2", "y = x + 5", "y = 1/2 x", "y = 1/2 x + 5"],
        answer: 1,
      },
      {
        id: 9,
        type: "multi",
        prompt: "A diagram has exactly two black dots and one green dot for every four red dots. Which of the following could be the total number of dots in the diagram?",
        options: ["84", "104", "144", "164", "204", "224"],
        answer: [0, 5],
      },
      {
        id: 10,
        type: "multi",
        prompt: "There are more than three times as many boys as girls in a class. On a test, the boys' average score was 78, and the girls' average score was 94. Which of the following could be the average test score for the entire class?",
        options: ["78", "80", "82", "84", "86", "88"],
        answer: [1],
      },
      {
        id: 11,
        type: "single",
        prompt: "If ((2^x)/3) ((3^x)/2) = 1/36, what is the value of x?",
        options: ["-2", "-1", "0", "1", "2"],
        answer: 1,
      },
      {
        id: 12,
        type: "single",
        prompt: "A product is on sale for a discounted price that is 20 percent less than its regular price. The regular price is what percent greater than the discounted price?",
        options: ["20%", "22.5%", "25%", "30%", "40%"],
        answer: 2,
      },
      {
        id: 13,
        type: "single",
        prompt: "At Business K, the inventory value changed by +5% from April to May and by -5% from May to June. If the value for April was $30,000, what was the value for June?",
        options: ["$22,500", "$29,925", "$30,000", "$33,000", "$33,075"],
        answer: 1,
      },
      {
        id: 14,
        type: "single",
        prompt: "At Business M, the value of inventory for May was what percent of the value of inventory for June, if the change from May to June was +12%?",
        options: ["88.9%", "89.3%", "90.0%", "91.2%", "92.5%"],
        answer: 1,
      },
      {
        id: 15,
        type: "single",
        prompt: "For which business was the percent change in value of inventory from April to June the greatest?",
        options: ["G", "K", "M", "R", "V"],
        answer: 0,
      },
    ],
  },
  {
    id: "quant-practice-3-part-1",
    title: "Quant Practice Set 3, Part 1",
    minutes: 21,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "If y < -6, compare Quantity A, y, with Quantity B, -5.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 2,
        type: "single",
        prompt: "x is an integer between 23 and 27. Compare the median of 23, 24, 26, 27, and x with 25.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 3,
      },
      {
        id: 3,
        type: "single",
        prompt: "Line L has y-intercept a and passes through point P(3, a - 8). Compare the slope of L with -17/6.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 4,
        type: "single",
        prompt: "If 5! = (2^x)(3^y)(5^z), compare Quantity A, x, with Quantity B, z.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 5,
        type: "single",
        prompt: "Each year, the members of a book club select novels and nonfiction books to read. The club meets 3 times to discuss each novel and 5 times to discuss each nonfiction book. Last year, the club met 52 times and discussed 12 books. How many novels did the club discuss last year?",
        options: ["2", "4", "5", "7", "8"],
        answer: 1,
      },
      {
        id: 6,
        type: "single",
        prompt: "In the figure, triangle ACD is equilateral, AB = 1, BC = 2, and BE is perpendicular to AC. What is the area of quadrilateral BCDE?",
        options: ["9/4", "7√3/4", "9√3/4", "7√3/2", "6 + √3"],
        answer: 1,
      },
      {
        id: 7,
        type: "single",
        prompt: "The sum of all integers k such that -26 < k < 24 is:",
        options: ["0", "-2", "-25", "-49", "-51"],
        answer: 3,
      },
      {
        id: 8,
        type: "multi",
        prompt: "The average playing time of the 13 songs in a playlist is 3.6 minutes, and the median playing time is 3.4 minutes. Which of the following statements must be true?",
        options: ["At least 7 of the songs have a playing time of less than 3.6 minutes.", "At least 1 of the songs has a playing time of 3.6 minutes.", "At least 7 of the songs have a playing time of more than 3.4 minutes."],
        answer: [0],
      },
      {
        id: 9,
        type: "multi",
        prompt: "The lengths of the sides of a triangle are 12, 17, and l. Which of the following could be the perimeter of the triangle?",
        options: ["28", "34", "40", "56", "58", "60"],
        answer: [2, 3],
      },
      {
        id: 10,
        type: "single",
        prompt: "The table shows three groups rating Product X. Group A has 45 people with average rating 3.8, Group B has 25 people with average rating 4.6, and Group C has 30 people with average rating 4.2. What is the average rating for the combined three groups, to the nearest tenth?",
        options: ["3.9", "4.0", "4.1", "4.2", "4.3"],
        answer: 2,
      },
      {
        id: 11,
        type: "single",
        prompt: "The average of a number and 20% of that number is 660. What is the number?",
        options: ["900", "960", "1000", "1100", "1200"],
        answer: 3,
      },
      {
        id: 12,
        type: "single",
        prompt: "A group of friends orders equal numbers of $12.95 pepperoni pizzas and $13.95 seafood pizzas for a total cost of $161.40. What is the total number of pizzas ordered?",
        options: ["8", "10", "12", "14", "16"],
        answer: 2,
      },
    ],
  },
  {
    id: "quant-practice-3-part-2",
    title: "Quant Practice Set 3, Part 2",
    minutes: 26,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "x is a positive integer and N = 24^x. Compare Quantity A, the number of possible values of the units digit of N, with Quantity B, 4.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 2,
        type: "single",
        prompt: "Point P(a, b) lies on line L in the third quadrant, and Q is on the negative y-axis. If angle POQ is 40 degrees, compare a with b.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 3,
        type: "single",
        prompt: "Set S consists only of positive integers. All elements of S are greater than 20 and smaller than 40. Compare the median of set S with the range of set S.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 3,
      },
      {
        id: 4,
        type: "single",
        prompt: "If 0 < x < 1, compare Quantity A, √x, with Quantity B, x^2.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 5,
        type: "single",
        prompt: "For which value of X is the standard deviation of the set S = {6, 8, 12, 14, X} the smallest?",
        options: ["2", "10", "14", "18", "36"],
        answer: 1,
      },
      {
        id: 6,
        type: "single",
        prompt: "Of the students in a school, 20 percent are in the science club and 30 percent are in the band. If 25 percent are in the band but not in the science club, what percent of the students who are in the science club are not in the band?",
        options: ["5%", "15%", "20%", "60%", "75%"],
        answer: 4,
      },
      {
        id: 7,
        type: "single",
        prompt: "The graph of f is y = 2|x| + 4. For which of the following functions g does the graph of g intersect the graph of f?",
        options: ["g(x) = x - 2", "g(x) = x + 3", "g(x) = 2x - 2", "g(x) = 2x + 3", "g(x) = 3x - 2"],
        answer: 4,
      },
      {
        id: 8,
        type: "multi",
        prompt: "The runners on a cross country team ran a 5-mile race at average speeds ranging from 4 miles per hour to 7 miles per hour. Which of the following are possible race completion times for individual members of the team?",
        options: ["36 minutes", "48 minutes", "60 minutes", "75 minutes", "90 minutes"],
        answer: [1, 2, 3],
      },
      {
        id: 9,
        type: "multi",
        prompt: "A flat rectangular tile has a length between 4 inches and 6 inches and a width between 3 inches and 6 inches. Which of the following could be the area, in square feet, of the top surface of the tile?",
        options: ["1/8", "1/6", "1/2", "4/3"],
        answer: [0, 1],
      },
      {
        id: 10,
        type: "single",
        prompt: "Machine A produces 8 pounds of peanut butter in 12 minutes, and Machine B produces 8 pounds in 18 minutes. How many seconds will it take the two machines, working together, to produce 1 pound of peanut butter?",
        options: ["48", "54", "60", "72", "90"],
        answer: 1,
      },
      {
        id: 11,
        type: "single",
        prompt: "The value of a is 110% of the value of b. The value of b is 90% less than 47. What is the value of a?",
        options: ["4.7", "5.0", "5.17", "5.5", "6.27"],
        answer: 2,
      },
      {
        id: 12,
        type: "single",
        prompt: "If x = (2^a)(3^b)(5^c)(7^d)(11^e) is the product of the positive integers from 1 to 8 inclusive, what is a + b + c + d + e?",
        options: ["9", "10", "11", "12", "13"],
        answer: 2,
      },
      {
        id: 13,
        type: "single",
        prompt: "In winter 2018, two thirds of the cardinal sightings, one half of the junco sightings, and one quarter of the sparrow sightings were recorded in January. What fraction of the total number of sightings of these three bird species in winter 2018 was registered in January?",
        options: ["1/4", "1/3", "1/2", "2/3", "3/4"],
        answer: 2,
      },
      {
        id: 14,
        type: "single",
        prompt: "For which bird species listed in the table is the standard deviation of the registered number of sightings during the four seasons the smallest?",
        options: ["Sparrow", "Goldfinch", "Robin", "Cardinal", "Nuthatch"],
        answer: 0,
      },
      {
        id: 15,
        type: "single",
        prompt: "By what percentage did the number of wren sightings increase from spring to summer 2018? Give your answer to the nearest whole percent.",
        options: ["50%", "60%", "67%", "75%", "80%"],
        answer: 2,
      },
    ],
  },
  {
    id: "quant-practice-4-part-1-partial",
    title: "Quant Practice Set 4, Part 1 (Partial)",
    minutes: 21,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "If 0 < x < y < 1, compare Quantity A, 1 - y, with Quantity B, y - x.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 3,
      },
      {
        id: 2,
        type: "single",
        prompt: "S is the set of all integers n that satisfy 2 ≤ |n| ≤ 5. Compare the absolute value of the greatest integer in S with the absolute value of the smallest integer in S.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 2,
      },
      {
        id: 3,
        type: "single",
        prompt: "A, B, C, and D are four different points on a circle with center O, and AB is a diameter. Compare AB with (AC + AD) / 2.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 4,
        type: "single",
        prompt: "A random variable Y is normally distributed with a mean of 200 and a standard deviation of 10. Compare P(Y > 220) with 1/20.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 5,
        type: "single",
        prompt: "In the figure, both circles have the same centre. If the area of the shaded ring is 3 times the area of the smaller circular region, how many times is the circumference of the larger circle than the circumference of the smaller circle?",
        options: ["√2", "√3", "2", "√6", "4"],
        answer: 2,
      },
      {
        id: 6,
        type: "single",
        prompt: "Betty drove two fifths of the distance from City A to City B on the first day and two thirds of the remaining distance on the second day. Which expression is equivalent to the fraction of the total distance that she drove on the third day?",
        options: ["1 - 2/5 - 2/3", "1 - 2/5 - 2/3(2/5)", "1 - 2/5 - 2/5(1 - 2/3)", "1 - 2/5 - 2/3(1 - 2/5)", "1 - 2/5 - 2/3(1 - 2/5 - 2/3)"],
        answer: 3,
      },
      {
        id: 7,
        type: "single",
        prompt: "At the beginning of the year there were 300 fish in a pond, 15 percent of them catfish, and at the end of the year there were 400 fish, 10 percent of them catfish. From the beginning to the end of the year, what was the change in the number of catfish in the pond?",
        options: ["The number decreased by more than 5 percent.", "The number decreased by 5 percent.", "The number did not change.", "The number increased by 5 percent.", "The number increased by more than 5 percent."],
        answer: 0,
      },
      {
        id: 8,
        type: "multi",
        prompt: "What is a possible integer value of x if x is part of the solution set of ||x + 3| - 12| < 13?",
        options: ["-25", "-1", "1", "25"],
        answer: [0, 1, 2],
      },
      {
        id: 9,
        type: "multi",
        prompt: "A customer pays for a book with a $10 bill and receives correct change, which is less than $3.00. The total amount paid is the price plus a sales tax equal to 4 percent of the price. Which of the following statements must be true?",
        options: ["The price of the book is less than $9.50.", "The price of the book is greater than $6.90.", "The sales tax is less than $0.50."],
        answer: [2],
      },
    ],
  },
  {
    id: "quant-practice-4-part-1-completion",
    title: "Quant Practice Set 4, Part 1 Completion",
    minutes: 8,
    questions: [
      {
        id: 10,
        type: "single",
        prompt: "Starting with the third term, each term in sequence S is one-half the sum of the previous 2 terms. If the first 2 terms of sequence S are 64 and 32, respectively, and the nth term is the first non-integer term of sequence S, what is the value of n?",
        options: ["5", "6", "7", "8", "9"],
        answer: 3,
      },
      {
        id: 11,
        type: "single",
        prompt: "If (2^x)(3^y) = 288 and x and y are positive integers, what is the value of (2^(x - 1))(3^(y - 2))?",
        options: ["8", "12", "16", "18", "24"],
        answer: 2,
      },
      {
        id: 12,
        type: "single",
        prompt: "In the coordinate figure, the legs of triangle ABC are parallel to the axes. If the length of leg BC is 5, what is the area of triangle ABC?",
        options: ["4", "5", "6", "8", "10"],
        answer: 1,
        figureRef: "Page 200, Question 12",
      },
    ],
  },
  {
    id: "quant-practice-4-part-2",
    title: "Quant Practice Set 4, Part 2",
    minutes: 26,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "When the decimal number d = 1.3k9 is rounded to the nearest tenth, the result is 1.4. Compare Quantity A, the hundredth digit k, with Quantity B, 4.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 2,
        type: "single",
        prompt: "In the xy-plane, the equation of line L is 3x - 2y = 6. Compare Quantity A, the x-intercept of line L, with Quantity B, the y-intercept of line L.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 3,
        type: "single",
        prompt: "If (1 - x) / (x - 1) = 1 / x, compare Quantity A, x, with Quantity B, -1/2.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 4,
        type: "single",
        prompt: "$10,000 was invested for one year at a simple annual interest rate of x percent and $8,000 was invested for one year at a simple annual interest rate of y percent such that x = 3y/4. Compare the amount of interest earned on the $10,000 investment with the amount of interest earned on the $8,000 investment.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 5,
        type: "single",
        prompt: "If the fraction 1 / ((2^11)(5^17)) is written as a terminating decimal number, how many nonzero digits will that decimal number have?",
        options: ["One", "Two", "Three", "Four", "Six"],
        answer: 1,
      },
      {
        id: 6,
        type: "single",
        prompt: "A copy machine reduced each dimension of an original picture by 20 percent to produce a first smaller version and then reduced each dimension of that first version by 15 percent to produce a second smaller version. Each dimension of the second smaller version was what percent of the corresponding dimension of the original picture?",
        options: ["35%", "38%", "65%", "68%", "70%"],
        answer: 3,
      },
      {
        id: 7,
        type: "single",
        prompt: "In the xy-plane, a circle is in quadrant I and tangent to both axes. If the distance from the centre of the circle to the origin is w, what is the area of the circle in terms of w?",
        options: ["(w^2/9)π", "(w^2/4)π", "(w^2/3)π", "(w^2/2)π", "w^2π"],
        answer: 3,
      },
      {
        id: 8,
        type: "single",
        prompt: "Approximately what is the total stopping distance, in feet, if a car is travelling at 40 miles per hour when the driver is signalled to stop?",
        options: ["130", "110", "90", "70", "40"],
        answer: 0,
        figureRef: "Pages 203–204, stopping-distance graphs",
      },
      {
        id: 9,
        type: "single",
        prompt: "Of the following, which is the greatest speed, in miles per hour, at which a car can travel and stop with a total stopping distance of less than 200 feet?",
        options: ["50", "55", "60", "65", "70"],
        answer: 0,
        figureRef: "Pages 203–204, stopping-distance graphs",
      },
      {
        id: 10,
        type: "single",
        prompt: "The total stopping distance for a car travelling at 60 miles per hour is approximately what percent greater than the total stopping distance for the car travelling at 50 miles per hour?",
        options: ["22%", "28%", "38%", "45%", "52%"],
        answer: 2,
        figureRef: "Pages 203–204, stopping-distance graphs",
      },
      {
        id: 11,
        type: "single",
        prompt: "On a final exam, 75 percent of a class had scores greater than 70, and 60 percent of the class had scores that were less than 85. What percent of the class had scores that were greater than 70 but less than 85?",
        options: ["25", "30", "35", "40", "45"],
        answer: 2,
      },
      {
        id: 12,
        type: "single",
        prompt: "Of the 20 light bulbs in a box, 2 are defective. An inspector selects 2 light bulbs simultaneously and at random from the box. What is the probability that neither selected bulb is defective, rounded to the nearest hundredth?",
        options: ["0.79", "0.80", "0.81", "0.82", "0.83"],
        answer: 2,
      },
      {
        id: 13,
        type: "multi",
        prompt: "In the xy-plane, line K does not pass through the origin. Which of the following statements individually provide sufficient information to determine whether the slope of line K is negative?",
        options: ["The product of the x-intercept and the y-intercept of line K is positive.", "Line K only passes through quadrants I, II, and IV and not through quadrant III.", "Line K is perpendicular to line L, and line L has equation 2x - y = 12."],
        answer: [0, 1, 2],
      },
      {
        id: 14,
        type: "multi",
        prompt: "Which two of the following numbers have a product that is between -1 and 0?",
        options: ["-20", "-10", "2^-4", "(-3)^-2"],
        answer: [1, 2],
      },
      {
        id: 15,
        type: "multi",
        prompt: "When measured from sea level, the height of Mountain C is 600 feet less than the height of Mountain D. If the height of Mountain C is greater than 800 feet, which of the following values could be the height, in feet, of Mountain D?",
        options: ["1,200", "1,500", "1,600", "1,800", "2,500", "3,000"],
        answer: [1, 2, 3, 4, 5],
      },
    ],
  },
  {
    id: "quant-practice-5-part-1",
    title: "Quant Practice Set 5, Part 1",
    minutes: 21,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "A sheet of paper in the form of a rectangle measures 14 cm by 21 cm. At the edge of the paper, a margin that is 1 cm wide is painted all the way around. Approximately what percent of the area of the original rectangle remains unpainted?",
        options: ["53%", "58%", "78%", "88%", "94%"],
        answer: 2,
      },
      {
        id: 2,
        type: "single",
        prompt: "If the integer n is calculated as n = 105^5 / m, then which of the following could be the value of m?",
        options: ["30", "56", "98", "121", "175"],
        answer: 4,
      },
      {
        id: 3,
        type: "single",
        prompt: "For positive numbers b, if p = √(b + 9) and q = √b, what is the value of the product of p - q and p + q?",
        options: ["3", "9", "b", "b + 3", "b + 9"],
        answer: 1,
      },
      {
        id: 4,
        type: "single",
        prompt: "Ann earned a 25% pay rise to bring her salary to $20,000. Bob received a 20% decrease in salary to bring his salary to $20,000. Compare the difference between the salaries of Bob and Ann before the adjustments were made with $9,000.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 2,
      },
      {
        id: 5,
        type: "single",
        prompt: "The area of the circle with centre C is 36π and 90° < x < 180°. Compare Quantity A, the area of the triangle, with Quantity B, 18.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
        figureRef: "Page 207, Question 05",
      },
      {
        id: 6,
        type: "single",
        prompt: "If abc = 0, bcd = 1, and cde = 0, compare Quantity A, a, with Quantity B, e.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 2,
      },
      {
        id: 7,
        type: "single",
        prompt: "A random variable Y is normally distributed with mean 3.5 and standard deviation 0.5. Compare P(3.5 < Y < 4.5) with P(4.0 < Y < 5.0).",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 8,
        type: "multi",
        prompt: "A grocery store has 105 pieces of fruit for sale consisting of apples, mangoes, and peaches. Which of the following statements individually provide sufficient additional information to determine the number of apples for sale at the grocery store?",
        options: ["The total number of apples and peaches was 62.", "The ratio of the number of apples to the total number of mangoes and peaches was 1 to 6.", "The ratio of the number of mangoes to the number of peaches was 43 to 47."],
        answer: [1, 2],
      },
      {
        id: 9,
        type: "multi",
        prompt: "In the xy-plane, line l is parallel to the line with equation y = 3x + 2. If line l passes through point (1, -1), then through which of the following points does line l pass?",
        options: ["(2, 2)", "(0, -2)", "(-2, -10)"],
        answer: [0, 2],
      },
      {
        id: 10,
        type: "single",
        prompt: "The ratio of programmers to scientists at a company was 8:5 in 2016 and 4:4 in 2018. If the total number of programmers and scientists at the company was 52 in 2016 and 196 in 2018, how many more scientists were at the company in 2018 than in 2016?",
        options: ["68", "72", "78", "84", "88"],
        answer: 2,
      },
      {
        id: 11,
        type: "single",
        prompt: "From the menu shown, a salad bar offers customers one green base, three toppings, and one dressing. How many different salads can customers create?",
        options: ["120", "180", "200", "220", "240"],
        answer: 4,
      },
      {
        id: 12,
        type: "single",
        prompt: "The figure shows a regular polygon with 9 sides. What is the value of x?",
        options: ["20", "30", "40", "45", "50"],
        answer: 2,
        figureRef: "Page 209, Question 12",
      },
    ],
  },
  {
    id: "quant-practice-5-part-2",
    title: "Quant Practice Set 5, Part 2",
    minutes: 26,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "In the first half of last year, a team won 60 percent of the games it played. In the second half of last year, the team played 20 games, winning 3 of them. If the team won 50 percent of the games it played last year, what was the total number of games the team played last year?",
        options: ["60", "70", "80", "90", "100"],
        answer: 3,
      },
      {
        id: 2,
        type: "single",
        prompt: "The k-th term of a sequence is defined by c_k = 1/k - 1/(k + 1). What is the sum of the first one hundred terms in this sequence?",
        options: ["1/10,100", "1/101", "1/100", "100/101", "1"],
        answer: 3,
      },
      {
        id: 3,
        type: "single",
        prompt: "The pentagon ABCDE is regular and is inscribed in a circle with centre O. From the six points A, B, C, D, E, and O, three points are randomly chosen to form a triangle. How many different triangles can be constructed in this way?",
        options: ["5", "20", "30", "60", "120"],
        answer: 1,
        figureRef: "Page 210, Question 03",
      },
      {
        id: 4,
        type: "single",
        prompt: "If (x + 5)^2 - (y - 3)^2 = 0 and x + y = 2, compare Quantity A, x - y, with Quantity B, 0.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 5,
        type: "single",
        prompt: "In the xy-plane, one of the vertices of square S is the point (2, 2). The diagonals of S intersect at the point (6, 6). Compare Quantity A, the area of S, with Quantity B, 64.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 2,
        figureRef: "Page 211, Question 05",
      },
      {
        id: 6,
        type: "single",
        prompt: "Average test scores for a class were 78 for the boys, 90 for the girls, and 81 for the class. Compare the number of boys who took the test with the number of girls who took the test.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 7,
        type: "single",
        prompt: "R = (2^16)(5^8)(N^10), where N is a prime number. Compare Quantity A, √R, with Quantity B, R/10.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 8,
        type: "single",
        prompt: "If -2|x - 5| = -12, compare Quantity A, x, with Quantity B, 0.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 3,
      },
      {
        id: 9,
        type: "multi",
        prompt: "Which of the following functions has as its domain the set of all real numbers?",
        options: ["f(x) = 4 / (x + 4)", "f(x) = √(4x^3)", "f(x) = 1 / √(4x^2 + 1)", "f(x) = 1 / |x + 4|"],
        answer: [2],
      },
      {
        id: 10,
        type: "multi",
        prompt: "The range of the heights of the female students in a class is 13.2 inches, and the range of the heights of the male students in the class is 13.4 inches. Which of the following statements individually provide sufficient information to determine the range of the heights of all the students in the class?",
        options: ["The tallest male student in the class is 5.8 inches taller than the tallest female student in the class.", "The median height of the male students in the class is 1.1 inches greater than the median height of the female students in the class.", "The average height of the male students in the class is 4.6 inches greater than the average height of the female students in the class."],
        answer: [0],
      },
      {
        id: 11,
        type: "multi",
        prompt: "A survey asked 1,150 people to choose their favourite laundry detergent from brands A, B, and C. Of the people surveyed, x percent chose A as their favourite brand. If x is rounded to the nearest integer, the result is 3, which of the following could be the number of people who chose A as their favourite brand?",
        options: ["20", "25", "30", "35", "40", "45", "50"],
        answer: [2, 3, 4],
      },
      {
        id: 12,
        type: "single",
        prompt: "A nurse combines an 8% glucose solution with another solution that has a 15% glucose concentration. If the nurse uses 120 ml of the 8% solution, how many millilitres of the 15% solution are needed to obtain a mixture with 12% concentration?",
        options: ["120", "140", "160", "180", "200"],
        answer: 2,
      },
      {
        id: 13,
        type: "single",
        prompt: "In the xy-plane, l and m are two perpendicular lines that intersect at (2, 3). If line l passes through the origin, what is the y-intercept of line m?",
        options: ["11/3", "4", "13/3", "14/3", "5"],
        answer: 2,
      },
      {
        id: 14,
        type: "single",
        prompt: "The total number of smartphones with memory capacity 256 GB in stock last month in Stores R and T was what fraction of the total number of smartphones of that type in stock last month in all three stores?",
        options: ["1/2", "2/3", "7/9", "4/5", "8/9"],
        answer: 1,
        figureRef: "Page 214, smartphone stock table",
      },
      {
        id: 15,
        type: "single",
        prompt: "The number of smartphones with memory capacity 512 GB sold by Store R last month was approximately what percent less than the number of such smartphones sold by Store T last month?",
        options: ["40%", "55%", "86%", "95%", "125%"],
        answer: 1,
        figureRef: "Page 214, smartphone stock table",
      },
    ],
  },
  {
    id: "quant-practice-6-part-1",
    title: "Quant Practice Set 6, Part 1",
    minutes: 21,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "If 0 < p < 1 and n is a positive integer, compare Quantity A, p^n, with Quantity B, p^-n.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 2,
        type: "single",
        prompt: "If f(x) = x for x ≥ 0 and f(x) = 1 / |x| for x < 0, compare Quantity A, f(2), with Quantity B, f(-1/4).",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
      },
      {
        id: 3,
        type: "single",
        prompt: "The area of the shaded region inside rectangle RSTW is 28. Compare Quantity A, the sum of the areas of the unshaded regions inside rectangle RSTW, with Quantity B, 42.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 2,
        figureRef: "Page 215, Question 03",
      },
      {
        id: 4,
        type: "single",
        prompt: "If s = (r + t) / 2, compare Quantity A, the median of r, s, and t, with Quantity B, s.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 2,
      },
      {
        id: 5,
        type: "single",
        prompt: "The figure shows a circle with centre C and radius 6. What is the sum of the areas of the two shaded regions?",
        options: ["7.5π", "6π", "4.5π", "4π", "3π"],
        answer: 3,
        figureRef: "Page 216, Question 05",
      },
      {
        id: 6,
        type: "single",
        prompt: "An investor placed a total of $6,400 in two accounts for one year. One account earned simple annual interest at 5 percent, and the other earned simple annual interest at 3 percent. If each account earned the same interest after one year, what was the total amount of interest earned from both accounts?",
        options: ["$120", "$144", "$240", "$256", "$512"],
        answer: 2,
      },
      {
        id: 7,
        type: "single",
        prompt: "S = {p, p + 2, p + 4, p + 6} and T = {p^2, (p + 2)^2, (p + 4)^2, (p + 6)^2}. The average of the data in set S is 6. What is the average of the data in set T?",
        options: ["30", "36", "41", "49", "52"],
        answer: 2,
      },
      {
        id: 8,
        type: "multi",
        prompt: "Charles and David begin work at 8:00 in the morning and finish at 4:30 in the afternoon. Charles begins his first break at 8:45 and his second at 9:30, then continues to take a break every 45 minutes throughout the day. David begins his first break at 9:00 and his second at 10:00, then continues to take a break every 60 minutes throughout the day. At which of the following times do Charles and David begin a break at the same time?",
        options: ["10:00 in the morning", "11:00 in the morning", "12:00 noon", "1:00 in the afternoon", "2:00 in the afternoon", "3:00 in the afternoon", "4:00 in the afternoon"],
        answer: [1, 2, 4, 5],
      },
      {
        id: 9,
        type: "multi",
        prompt: "Some of the 50 students in a class have visited at least one of two museums. Twenty-five have visited museum A, and 10 have visited both museum A and museum B. Which of the following statements individually provide sufficient additional information to determine the number of students who have visited museum B?",
        options: ["20 students have visited neither museum A nor museum B.", "Twice as many students have visited both museums as have visited only museum B.", "Twice as many students have visited neither museum as have visited both museums."],
        answer: [0, 1, 2],
      },
      {
        id: 10,
        type: "multi",
        prompt: "List K consists of five numbers a, b, c, d, and e such that 0 < a < b < c < d < e. Which of the following statements must be true?",
        options: ["The range of the numbers in list K is e.", "The median of the numbers in list K is c.", "The average of the numbers in list K is c."],
        answer: [1],
      },
      {
        id: 11,
        type: "single",
        prompt: "If 4^x = 256, then what is the value of 2^(2x - 1)?",
        options: ["64", "128", "256", "512", "1024"],
        answer: 1,
      },
      {
        id: 12,
        type: "single",
        prompt: "In the figure, ABCD is a square with side length 12, and EFGH is a square with side length 9. If the ratio of the area of square ABCD to the area of square EFGH is equal to the ratio of the area of triangle PCD to the area of triangle QGH, what is the ratio of the length of PC to the length of QG?",
        options: ["2/3", "3/4", "4/3", "3/2", "16/9"],
        answer: 2,
        figureRef: "Page 218, Question 12",
      },
    ],
  },
  {
    id: "quant-practice-6-part-2",
    title: "Quant Practice Set 6, Part 2",
    minutes: 26,
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "If y / 8 = z / 16, compare Quantity A, (y + 1) / 4, with Quantity B, (z + 1) / 8.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 2,
        type: "single",
        prompt: "In the figure, the ratio of PW to PR in rectangle PRSW is equal to the ratio of PQ to QT in rectangle PQTW. Compare Quantity A, x, with Quantity B, 20.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 1,
        figureRef: "Page 219, Question 02",
      },
      {
        id: 3,
        type: "single",
        prompt: "If y = f(x) = x(x^2 - 4), compare Quantity A, the number of points where the graph of y = f(x) intersects the x-axis, with Quantity B, 3.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 2,
      },
      {
        id: 4,
        type: "single",
        prompt: "If 0 < r < s < t < 1, compare Quantity A, r / (st), with Quantity B, rt / s.",
        options: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined from the information given"],
        answer: 0,
      },
      {
        id: 5,
        type: "single",
        prompt: "The width of rectangle T is 25 percent greater than the width of rectangle R, and the length of T is 10 percent greater than the length of R. The area of T is what percent greater than the area of R?",
        options: ["2.5%", "15%", "27.3%", "35%", "37.5%"],
        answer: 4,
      },
      {
        id: 6,
        type: "single",
        prompt: "The average ages of the people in group A and group B are 41 and 36, respectively. The average age of the people in the two groups combined is 38. If there are no people in both groups, what fraction of the people in the two groups combined are in group B?",
        options: ["2/5", "1/2", "3/5", "2/3", "3/4"],
        answer: 2,
      },
      {
        id: 7,
        type: "single",
        prompt: "Which of the following sets has the greatest standard deviation?",
        options: ["A = {10,20,30,40,50}", "B = {10,30,30,30,50}", "C = {10,25,30,35,50}", "D = {10,10,30,50,50}", "E = {20,20,30,40,40}"],
        answer: 3,
      },
      {
        id: 8,
        type: "single",
        prompt: "For 2008, the annual earnings of the European division were approximately what percent of the combined annual earnings of the two divisions?",
        options: ["25%", "40%", "50%", "60%", "75%"],
        answer: 0,
        figureRef: "Page 221, annual earnings chart",
      },
      {
        id: 9,
        type: "single",
        prompt: "If the annual earnings of the European division for 2009 represented 7 percent of the division's annual revenues, approximately how much were its annual revenues?",
        options: ["$11 billion", "$21 billion", "$37 billion", "$105 billion", "$214 billion"],
        answer: 1,
        figureRef: "Page 221, annual earnings chart",
      },
      {
        id: 10,
        type: "single",
        prompt: "For the years shown, the range of the annual earnings of the United States division was approximately how much greater than the range of the annual earnings of the European division?",
        options: ["$1.5 billion", "$2.7 billion", "$3.6 billion", "$4.3 billion", "$5.0 billion"],
        answer: 2,
        figureRef: "Page 221, annual earnings chart",
      },
      {
        id: 11,
        type: "single",
        prompt: "In the sequence a1, a2, a3, ..., an, if a1 = 2, a2 = 4, and an = a(n-1) + n for each integer n greater than 2, what is the value of a6?",
        options: ["18", "20", "22", "24", "26"],
        answer: 2,
      },
      {
        id: 12,
        type: "single",
        prompt: "Canada is one of the more multilingual countries in the world. Ninety percent of Canadians speak English, 64 percent speak French, and 63 percent speak both English and French. What percentage of Canadians who do not speak English also do not speak French?",
        options: ["10%", "27%", "36%", "63%", "90%"],
        answer: 4,
      },
      {
        id: 13,
        type: "multi",
        prompt: "At 12:00 noon a hose began draining water from a pool at a constant rate of 120 ounces per minute. At 2:00 in the afternoon, an additional hose began draining water from the pool, increasing the constant rate to 240 ounces per minute. The pool was empty before 4:30 that afternoon. Which of the following could have been the amount of water, in ounces, in the pool at 12:00 noon that day?",
        options: ["42,640", "46,080", "50,250", "52,540", "55,320"],
        answer: [0, 1, 2],
      },
      {
        id: 14,
        type: "multi",
        prompt: "The figure shows the lines with equations y = ax + b and y = cx + k, in which a, b, c, and k are constants. Which of the following statements must be true?",
        options: ["c < a", "c > a", "k < b", "k > b"],
        answer: [1, 2],
        figureRef: "Page 223, Question 14",
      },
      {
        id: 15,
        type: "multi",
        prompt: "An item was on sale for a discounted price that was p percent less than the regular price of $50. A customer purchased the item at the discounted price and used a coupon valued at k dollars to pay for part of the item. If the discounted price was equal to the value of the coupon plus $20, which of the following could be the values of p and k?",
        options: ["p = 10 and k = 20", "p = 10 and k = 25", "p = 20 and k = 10", "p = 20 and k = 20"],
        answer: [1, 3],
      },
    ],
  }
]

const ISSUE_PROMPT = `Book-linked issue task

Paste the exact issue prompt from the uploaded book page here, or use this workspace to draft while the next batch is being added.`

const ISSUE_NOTES = `Planning grid

Position:
Reason 1:
Reason 2:
Counterpoint:
Examples:`

function formatTime(totalSeconds) {
  const safe = Math.max(0, totalSeconds)
  const minutes = String(Math.floor(safe / 60)).padStart(2, "0")
  const seconds = String(safe % 60).padStart(2, "0")
  return `${minutes}:${seconds}`
}

function ProgressBar() {
  const pct = Math.round((LOADED_PAGES / TOTAL_PAGES) * 100)
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
        <span>{LOADED_PAGES} of {TOTAL_PAGES} pages loaded</span>
        <span>{pct}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-slate-900" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function TimerCard({ label, seconds, running, onStart, onPause, onReset }) {
  return (
    <Card className="border border-slate-200 shadow-sm">
      <CardContent className="p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</div>
            <div className="mt-2 flex items-center gap-3 text-4xl font-semibold text-slate-950">
              <Clock3 className="h-8 w-8 text-slate-500" />
              <span>{formatTime(seconds)}</span>
            </div>
          </div>
          <div className="flex gap-2">
            {running ? (
              <Button variant="outline" onClick={onPause} className="rounded-2xl">
                <StopCircle className="mr-2 h-4 w-4" />
                Pause
              </Button>
            ) : (
              <Button onClick={onStart} className="rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
                <Play className="mr-2 h-4 w-4" />
                Start
              </Button>
            )}
            <Button variant="outline" onClick={onReset} className="rounded-2xl">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function HomeView({ setView }) {
  return (
    <div className="space-y-4">
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">GRE test simulator</div>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950">Stable preview restored</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              This version keeps the simulator live while avoiding the preview error. Verbal modules remain accessible, the issue-task timer still works, and the book map still tracks full book coverage through page 239.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => setView("verbal")} className="rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
                <FileText className="mr-2 h-4 w-4" />
                Open practice decks
              </Button>
              <Button variant="outline" onClick={() => setView("essay")} className="rounded-2xl">
                <PenSquare className="mr-2 h-4 w-4" />
                Open issue task
              </Button>
              <Button variant="outline" onClick={() => setView("vocab")} className="rounded-2xl">
                <BookOpen className="mr-2 h-4 w-4" />
                Open vocabulary review
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Coverage</div>
            <div className="mt-3 text-4xl font-semibold text-slate-950">{Math.round((LOADED_PAGES / TOTAL_PAGES) * 100)}%</div>
            <div className="mt-2 text-sm text-slate-600">Verbal live. Full book loaded. Quant is complete through page 223, and the vocabulary appendix is indexed through page 238.</div>
            <div className="mt-5">
              <ProgressBar />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {MODULES.map((module) => (
          <Card key={module.id} className="border border-slate-200 shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-slate-950">{module.title}</div>
                  <div className="mt-1 text-sm text-slate-600">Pages {module.pages}</div>
                </div>
                <div className={`rounded-full px-3 py-1 text-xs font-medium ${module.status === "Locked" ? "bg-slate-100 text-slate-500" : "bg-slate-900 text-white"}`}>
                  {module.status}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function EssayView() {
  const initialSeconds = 30 * 60
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds)
  const [running, setRunning] = useState(false)
  const [prompt, setPrompt] = useState(ISSUE_PROMPT)
  const [notes, setNotes] = useState(ISSUE_NOTES)
  const [essay, setEssay] = useState("")

  useEffect(() => {
    if (!running) return
    const t = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(t)
          setRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [running])

  const words = useMemo(() => {
    const trimmed = essay.trim()
    if (!trimmed) return 0
    return trimmed.split(" ").filter(Boolean).length
  }, [essay])

  return (
    <div className="space-y-4">
      <TimerCard
        label="Issue task timer"
        seconds={secondsLeft}
        running={running}
        onStart={() => setRunning(true)}
        onPause={() => setRunning(false)}
        onReset={() => {
          setRunning(false)
          setSecondsLeft(initialSeconds)
        }}
      />

      <div className="grid gap-4 xl:grid-cols-2">
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-5">
            <div className="text-sm font-semibold text-slate-950">Prompt</div>
            <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="mt-4 min-h-[260px] rounded-3xl border-slate-200 bg-slate-50" />
          </CardContent>
        </Card>

        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold text-slate-950">Response workspace</div>
              <div className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">{words} words</div>
            </div>
            <Textarea value={essay} onChange={(e) => setEssay(e.target.value)} placeholder="Write your response here" className="mt-4 min-h-[260px] rounded-3xl border-slate-200" />
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-4 min-h-[140px] rounded-3xl border-slate-200 bg-slate-50" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function VerbalView() {
  const [deckId, setDeckId] = useState(DECKS[0].id)
  const deck = useMemo(() => DECKS.find((item) => item.id === deckId) || DECKS[0], [deckId])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [review, setReview] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(deck.minutes * 60)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    setQuestionIndex(0)
    setReview(false)
    setRunning(false)
    setSecondsLeft(deck.minutes * 60)
  }, [deckId, deck.minutes])

  useEffect(() => {
    if (!running) return
    const t = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(t)
          setRunning(false)
          setReview(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [running])

  const current = deck.questions[questionIndex]
  const key = `${deck.id}-${current.id}`
  const selected = answers[key] || []

  function pickSingle(index) {
    setAnswers((prev) => ({ ...prev, [key]: [index] }))
  }

  function toggleMulti(index) {
    setAnswers((prev) => {
      const currentValue = prev[key] || []
      if (currentValue.includes(index)) {
        return { ...prev, [key]: currentValue.filter((item) => item !== index) }
      }
      return { ...prev, [key]: [...currentValue, index].sort((a, b) => a - b) }
    })
  }

  const correctCount = deck.questions.reduce((count, q) => {
    const value = answers[`${deck.id}-${q.id}`]
    if (!value) return count
    if (q.type === "single") {
      return count + (value[0] === q.answer ? 1 : 0)
    }
    const sortedValue = [...value].sort((a, b) => a - b)
    const sortedAnswer = [...q.answer].sort((a, b) => a - b)
    const match = sortedValue.length === sortedAnswer.length && sortedValue.every((item, idx) => item === sortedAnswer[idx])
    return count + (match ? 1 : 0)
  }, 0)

  return (
    <div className="space-y-4">
      <TimerCard
        label={`${deck.title} timer`}
        seconds={secondsLeft}
        running={running}
        onStart={() => setRunning(true)}
        onPause={() => setRunning(false)}
        onReset={() => {
          setRunning(false)
          setSecondsLeft(deck.minutes * 60)
          setReview(false)
        }}
      />

      <div className="grid gap-4 xl:grid-cols-[0.82fr_1.18fr]">
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Practice decks</div>
            <div className="mt-4 space-y-3">
              {DECKS.map((item) => {
                const active = item.id === deckId
                return (
                  <button
                    key={item.id}
                    onClick={() => setDeckId(item.id)}
                    className={`w-full rounded-3xl border p-4 text-left ${active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-900"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-semibold">{item.title}</div>
                      <div className={`rounded-full px-3 py-1 text-xs ${active ? "bg-white/15 text-white" : "bg-white text-slate-600"}`}>{item.minutes} min</div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {deck.questions.map((q, idx) => {
                const qKey = `${deck.id}-${q.id}`
                const answered = (answers[qKey] || []).length > 0
                const active = idx === questionIndex
                return (
                  <button
                    key={qKey}
                    onClick={() => setQuestionIndex(idx)}
                    className={`h-12 rounded-2xl border text-sm font-medium ${active ? "border-slate-900 bg-slate-900 text-white" : answered ? "border-slate-300 bg-slate-100 text-slate-900" : "border-slate-200 bg-white text-slate-500"}`}
                  >
                    {q.id}
                  </button>
                )
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setReview((prev) => !prev)} className="rounded-2xl">
                {review ? "Hide answers" : "Show answers"}
              </Button>
              <div className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-600">Score: {review ? correctCount : "Off"}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Question {current.id}</div>
            <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-base leading-7 text-slate-900">{current.prompt}</div>

            {current.figureRef ? (
              <div className="mt-4 rounded-3xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600">
                Figure linked to source page: {current.figureRef}. Image-based quant questions are preserved by page reference here and should be checked against the uploaded book page.
              </div>
            ) : null}

            <div className="mt-5 grid gap-3">
              {current.options.map((option, idx) => {
                const picked = selected.includes(idx)
                const isCorrect = review && (current.type === "single" ? idx === current.answer : current.answer.includes(idx))
                const isWrong = review && picked && !isCorrect
                return (
                  <button
                    key={`${current.id}-${idx}`}
                    onClick={() => (current.type === "single" ? pickSingle(idx) : toggleMulti(idx))}
                    className={`rounded-2xl border p-4 text-left text-sm font-medium ${isCorrect ? "border-emerald-600 bg-emerald-50 text-emerald-800" : isWrong ? "border-red-500 bg-red-50 text-red-700" : picked ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"}`}
                  >
                    {String.fromCharCode(65 + idx)}. {option}
                  </button>
                )
              })}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <Button variant="outline" className="rounded-2xl" onClick={() => setQuestionIndex((prev) => Math.max(0, prev - 1))}>
                Previous
              </Button>
              <div className="text-sm text-slate-600">All source pages loaded.</div>
              <Button className="rounded-2xl bg-slate-900 text-white hover:bg-slate-800" onClick={() => setQuestionIndex((prev) => Math.min(deck.questions.length - 1, prev + 1))}>
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function VocabView() {
  const [query, setQuery] = useState("")
  const needle = query.trim().toUpperCase()
  const filtered = VOCAB_GROUPS.filter((group) => {
    if (!needle) return true
    return `${group.page} ${group.range} ${group.words.join(" ")}`.includes(needle)
  })

  return (
    <div className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Appendix vocabulary review</div>
          <div className="mt-3 text-sm leading-6 text-slate-600">
            The appendix pages are indexed by word and page range. Use search to jump to a term, then check the scanned source page for the original answer choices.
          </div>
          <div className="mt-4">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a vocabulary word"
              className="rounded-2xl border-slate-200"
            />
          </div>
          <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            {VOCAB_GROUPS.length} indexed appendix pages, {VOCAB_GROUPS.reduce((sum, group) => sum + group.words.length, 0)} vocabulary entries.
          </div>
        </CardContent>
      </Card>

      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Indexed pages</div>
          <div className="mt-4 space-y-3">
            {filtered.map((group) => (
              <div key={group.page} className="rounded-3xl border border-slate-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900">Page {group.page}</div>
                    <div className="mt-1 text-sm text-slate-600">Words {group.range}</div>
                  </div>
                  <div className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">{group.words.length} entries</div>
                </div>
                <div className="mt-3 text-sm leading-7 text-slate-700">{group.words.join(", ")}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function BookMapView() {
  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1)
  return (
    <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Page map</div>
          <div className="mt-4 grid grid-cols-5 gap-2 md:grid-cols-8 xl:grid-cols-10">
            {pages.map((page) => {
              const loaded = page <= LOADED_PAGES
              return (
                <div key={page} className={`flex h-10 items-center justify-center rounded-2xl border text-xs font-medium ${loaded ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-400"}`}>
                  {page}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Loaded batches</div>
          <div className="mt-4 space-y-3">
            {BATCHES.map((batch) => (
              <div key={batch.id} className="rounded-3xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900">{batch.label}</div>
                    <div className="mt-1 text-sm text-slate-600">Pages {batch.pages}</div>
                  </div>
                  <div className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">{batch.status}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function IntakeView() {
  const [name, setName] = useState("Archive complete")
  const [range, setRange] = useState("1–239")
  const [notes, setNotes] = useState("All pages are now loaded. Quantitative Reasoning is complete through page 223, and the appendix vocabulary review is indexed through page 238. Figure-based quant questions remain tied to their source-page references.")

  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Batch register</div>
          <div className="mt-4 space-y-3">
            {BATCHES.map((batch) => (
              <div key={batch.id} className="rounded-3xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900">{batch.label}</div>
                    <div className="mt-1 text-sm text-slate-600">Pages {batch.pages}</div>
                  </div>
                  <div className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">{batch.status}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Next batch staging</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <div className="mb-2 text-sm font-medium text-slate-700">Batch name</div>
              <Input value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border-slate-200" />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium text-slate-700">Page range</div>
              <Input value={range} onChange={(e) => setRange(e.target.value)} className="rounded-2xl border-slate-200" />
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-2 text-sm font-medium text-slate-700">Notes</div>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-[180px] rounded-3xl border-slate-200 bg-slate-50" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Nav({ view, setView }) {
  const items = [
    { id: "home", label: "Home", icon: Grid2X2 },
    { id: "essay", label: "Issue Task", icon: PenSquare },
    { id: "verbal", label: "Practice", icon: FileText },
    { id: "book", label: "Book Map", icon: BookOpen },
    { id: "vocab", label: "Vocab", icon: FileText },
    { id: "intake", label: "Batch Intake", icon: Upload },
  ]

  return (
    <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">GRE book simulator</div>
          <div className="mt-1 text-xl font-semibold text-slate-950">Preview-safe build</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => {
            const Icon = item.icon
            const active = item.id === view
            return (
              <Button
                key={item.id}
                variant={active ? "default" : "outline"}
                onClick={() => setView(item.id)}
                className={`rounded-2xl ${active ? "bg-slate-900 text-white hover:bg-slate-800" : ""}`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState("home")

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <Nav view={view} setView={setView} />
      <main className="mx-auto max-w-7xl space-y-4 px-4 py-6 md:px-8">
        {view === "home" && <HomeView setView={setView} />}
        {view === "essay" && <EssayView />}
        {view === "verbal" && <VerbalView />}
        {view === "book" && <BookMapView />}
        {view === "vocab" && <VocabView />}
        {view === "intake" && <IntakeView />}
      </main>
    </div>
  )
}
