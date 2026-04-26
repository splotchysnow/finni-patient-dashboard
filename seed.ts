import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { patients } from "./lib/db/schema"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const client = neon(process.env.DATABASE_URL!)
const db = drizzle(client)

const seedData = [
  { firstName: "Emma", middleName: "Grace", lastName: "Johnson", dateOfBirth: "2018-03-15", status: "Active", address: "123 Maple St, San Diego, CA 92101" },
  { firstName: "Liam", middleName: "James", lastName: "Williams", dateOfBirth: "2019-07-22", status: "Onboarding", address: "456 Oak Ave, Los Angeles, CA 90001" },
  { firstName: "Sophia", middleName: "Marie", lastName: "Brown", dateOfBirth: "2017-11-08", status: "Inquiry", address: "789 Pine Rd, San Francisco, CA 94102" },
  { firstName: "Noah", middleName: "Alexander", lastName: "Davis", dateOfBirth: "2020-01-30", status: "Active", address: "321 Elm St, Sacramento, CA 95814" },
  { firstName: "Olivia", middleName: "Rose", lastName: "Martinez", dateOfBirth: "2016-09-14", status: "Churned", address: "654 Cedar Blvd, San Jose, CA 95101" },
  { firstName: "Ethan", middleName: "Cole", lastName: "Garcia", dateOfBirth: "2021-04-05", status: "Inquiry", address: "987 Birch Ln, Fresno, CA 93701" },
  { firstName: "Ava", middleName: "Lynn", lastName: "Wilson", dateOfBirth: "2018-12-19", status: "Active", address: "147 Walnut Dr, Long Beach, CA 90802" },
  { firstName: "Lucas", middleName: "Thomas", lastName: "Anderson", dateOfBirth: "2019-06-27", status: "Onboarding", address: "258 Spruce Way, Oakland, CA 94601" },
  { firstName: "Mia", middleName: "Claire", lastName: "Taylor", dateOfBirth: "2020-08-11", status: "Churned", address: "369 Willow Ct, Bakersfield, CA 93301" },
  { firstName: "Jackson", middleName: "Ray", lastName: "Moore", dateOfBirth: "2017-02-03", status: "Active", address: "741 Ash Pl, Anaheim, CA 92801" },
  { firstName: "Aiden", middleName: "Scott", lastName: "Thompson", dateOfBirth: "2019-05-12", status: "Inquiry", address: "852 Oak St, San Diego, CA 92103" },
  { firstName: "Isabella", middleName: "Faith", lastName: "White", dateOfBirth: "2018-09-23", status: "Active", address: "963 Pine Ave, Los Angeles, CA 90002" },
  { firstName: "Mason", middleName: "Lee", lastName: "Harris", dateOfBirth: "2020-11-30", status: "Onboarding", address: "174 Elm Blvd, San Francisco, CA 94103" },
  { firstName: "Charlotte", middleName: "Ann", lastName: "Clark", dateOfBirth: "2017-06-18", status: "Churned", address: "285 Cedar Rd, Sacramento, CA 95815" },
  { firstName: "James", middleName: "Paul", lastName: "Lewis", dateOfBirth: "2021-02-14", status: "Active", address: "396 Birch Ln, San Jose, CA 95102" },
  { firstName: "Amelia", middleName: "Joy", lastName: "Robinson", dateOfBirth: "2019-08-07", status: "Inquiry", address: "407 Walnut Dr, Fresno, CA 93702" },
  { firstName: "Elijah", middleName: "Dean", lastName: "Walker", dateOfBirth: "2018-04-25", status: "Active", address: "518 Spruce Way, Long Beach, CA 90803" },
  { firstName: "Harper", middleName: "Skye", lastName: "Hall", dateOfBirth: "2020-07-19", status: "Onboarding", address: "629 Ash Ct, Oakland, CA 94602" },
  { firstName: "Benjamin", middleName: "Roy", lastName: "Allen", dateOfBirth: "2016-12-03", status: "Churned", address: "730 Maple St, Bakersfield, CA 93302" },
  { firstName: "Evelyn", middleName: "Faye", lastName: "Young", dateOfBirth: "2021-09-16", status: "Active", address: "841 Oak Ave, Anaheim, CA 92802" },
  { firstName: "Logan", middleName: "Brett", lastName: "Hernandez", dateOfBirth: "2019-03-28", status: "Inquiry", address: "952 Pine Rd, San Diego, CA 92104" },
  { firstName: "Abigail", middleName: "Paige", lastName: "King", dateOfBirth: "2018-01-11", status: "Active", address: "163 Elm St, Los Angeles, CA 90003" },
  { firstName: "Sebastian", middleName: "Kurt", lastName: "Wright", dateOfBirth: "2020-05-24", status: "Onboarding", address: "274 Cedar Blvd, San Francisco, CA 94104" },
  { firstName: "Emily", middleName: "Kate", lastName: "Lopez", dateOfBirth: "2017-10-09", status: "Churned", address: "385 Birch Ln, Sacramento, CA 95816" },
  { firstName: "Michael", middleName: "Troy", lastName: "Hill", dateOfBirth: "2021-07-22", status: "Active", address: "496 Walnut Dr, San Jose, CA 95103" },
  { firstName: "Ella", middleName: "Mae", lastName: "Scott", dateOfBirth: "2019-11-15", status: "Inquiry", address: "507 Spruce Way, Fresno, CA 93703" },
  { firstName: "Alexander", middleName: "Hugh", lastName: "Green", dateOfBirth: "2018-06-30", status: "Active", address: "618 Ash Pl, Long Beach, CA 90804" },
  { firstName: "Scarlett", middleName: "Dawn", lastName: "Adams", dateOfBirth: "2020-02-17", status: "Onboarding", address: "729 Maple St, Oakland, CA 94603" },
  { firstName: "Daniel", middleName: "Glen", lastName: "Baker", dateOfBirth: "2016-08-04", status: "Churned", address: "830 Oak Ave, Bakersfield, CA 93303" },
  { firstName: "Grace", middleName: "Hope", lastName: "Gonzalez", dateOfBirth: "2021-04-27", status: "Active", address: "941 Pine Rd, Anaheim, CA 92803" },
  { firstName: "Matthew", middleName: "Shane", lastName: "Nelson", dateOfBirth: "2019-01-20", status: "Inquiry", address: "152 Elm St, San Diego, CA 92105" },
  { firstName: "Chloe", middleName: "Bree", lastName: "Carter", dateOfBirth: "2018-07-13", status: "Active", address: "263 Cedar Blvd, Los Angeles, CA 90004" },
  { firstName: "Henry", middleName: "Dale", lastName: "Mitchell", dateOfBirth: "2020-09-26", status: "Onboarding", address: "374 Birch Ln, San Francisco, CA 94105" },
  { firstName: "Victoria", middleName: "Gail", lastName: "Perez", dateOfBirth: "2017-04-11", status: "Churned", address: "485 Walnut Dr, Sacramento, CA 95817" },
  { firstName: "Joseph", middleName: "Neil", lastName: "Roberts", dateOfBirth: "2021-12-04", status: "Active", address: "596 Spruce Way, San Jose, CA 95104" },
  { firstName: "Penelope", middleName: "Sage", lastName: "Turner", dateOfBirth: "2019-06-17", status: "Inquiry", address: "607 Ash Ct, Fresno, CA 93704" },
  { firstName: "Samuel", middleName: "Beau", lastName: "Phillips", dateOfBirth: "2018-11-02", status: "Active", address: "718 Maple St, Long Beach, CA 90805" },
  { firstName: "Lily", middleName: "Pearl", lastName: "Campbell", dateOfBirth: "2020-04-15", status: "Onboarding", address: "829 Oak Ave, Oakland, CA 94604" },
  { firstName: "David", middleName: "Ross", lastName: "Parker", dateOfBirth: "2016-10-28", status: "Churned", address: "930 Pine Rd, Bakersfield, CA 93304" },
  { firstName: "Zoey", middleName: "Wren", lastName: "Evans", dateOfBirth: "2021-08-11", status: "Active", address: "141 Elm St, Anaheim, CA 92804" },
  { firstName: "Carter", middleName: "Finn", lastName: "Edwards", dateOfBirth: "2019-02-24", status: "Inquiry", address: "252 Cedar Blvd, San Diego, CA 92106" },
  { firstName: "Nora", middleName: "Blaire", lastName: "Collins", dateOfBirth: "2018-08-09", status: "Active", address: "363 Birch Ln, Los Angeles, CA 90005" },
  { firstName: "Wyatt", middleName: "Cash", lastName: "Stewart", dateOfBirth: "2020-12-22", status: "Onboarding", address: "474 Walnut Dr, San Francisco, CA 94106" },
  { firstName: "Riley", middleName: "Brynn", lastName: "Sanchez", dateOfBirth: "2017-07-07", status: "Churned", address: "585 Spruce Way, Sacramento, CA 95818" },
  { firstName: "John", middleName: "Mark", lastName: "Morris", dateOfBirth: "2021-05-20", status: "Active", address: "696 Ash Pl, San Jose, CA 95105" },
  { firstName: "Hannah", middleName: "Jade", lastName: "Rogers", dateOfBirth: "2019-09-03", status: "Inquiry", address: "707 Maple St, Fresno, CA 93705" },
  { firstName: "Dylan", middleName: "Rhett", lastName: "Reed", dateOfBirth: "2018-02-16", status: "Active", address: "818 Oak Ave, Long Beach, CA 90806" },
  { firstName: "Layla", middleName: "Belle", lastName: "Cook", dateOfBirth: "2020-06-29", status: "Onboarding", address: "929 Pine Rd, Oakland, CA 94605" },
  { firstName: "Gabriel", middleName: "Knox", lastName: "Morgan", dateOfBirth: "2016-11-14", status: "Churned", address: "130 Elm St, Bakersfield, CA 93305" },
  { firstName: "Eleanor", middleName: "Fern", lastName: "Bell", dateOfBirth: "2021-03-27", status: "Active", address: "241 Cedar Blvd, Anaheim, CA 92805" },
  { firstName: "Julian", middleName: "Cruz", lastName: "Murphy", dateOfBirth: "2019-07-10", status: "Inquiry", address: "352 Birch Ln, San Diego, CA 92107" },
  { firstName: "Addison", middleName: "Faye", lastName: "Bailey", dateOfBirth: "2018-12-25", status: "Active", address: "463 Walnut Dr, Los Angeles, CA 90006" },
  { firstName: "Levi", middleName: "Jace", lastName: "Rivera", dateOfBirth: "2020-03-08", status: "Onboarding", address: "574 Spruce Way, San Francisco, CA 94107" },
  { firstName: "Aubrey", middleName: "Shea", lastName: "Cooper", dateOfBirth: "2017-09-21", status: "Churned", address: "685 Ash Ct, Sacramento, CA 95819" },
  { firstName: "Isaac", middleName: "Wade", lastName: "Richardson", dateOfBirth: "2021-11-14", status: "Active", address: "796 Maple St, San Jose, CA 95106" },
  { firstName: "Stella", middleName: "Rue", lastName: "Cox", dateOfBirth: "2019-04-27", status: "Inquiry", address: "807 Oak Ave, Fresno, CA 93706" },
  { firstName: "Lincoln", middleName: "Hank", lastName: "Howard", dateOfBirth: "2018-10-12", status: "Active", address: "918 Pine Rd, Long Beach, CA 90807" },
  { firstName: "Natalie", middleName: "June", lastName: "Ward", dateOfBirth: "2020-08-25", status: "Onboarding", address: "129 Elm St, Oakland, CA 94606" },
  { firstName: "Anthony", middleName: "Cade", lastName: "Torres", dateOfBirth: "2016-12-10", status: "Churned", address: "230 Cedar Blvd, Bakersfield, CA 93306" },
  { firstName: "Hazel", middleName: "Iris", lastName: "Peterson", dateOfBirth: "2021-06-23", status: "Active", address: "341 Birch Ln, Anaheim, CA 92806" },
  { firstName: "Christopher", middleName: "Blake", lastName: "Gray", dateOfBirth: "2019-10-06", status: "Inquiry", address: "452 Walnut Dr, San Diego, CA 92108" },
  { firstName: "Aurora", middleName: "Skye", lastName: "Ramirez", dateOfBirth: "2018-05-19", status: "Active", address: "563 Spruce Way, Los Angeles, CA 90007" },
  { firstName: "Josiah", middleName: "Tate", lastName: "James", dateOfBirth: "2020-11-01", status: "Onboarding", address: "674 Ash Pl, San Francisco, CA 94108" },
  { firstName: "Brooklyn", middleName: "Reese", lastName: "Watson", dateOfBirth: "2017-08-16", status: "Churned", address: "785 Maple St, Sacramento, CA 95820" },
  { firstName: "Andrew", middleName: "Zane", lastName: "Brooks", dateOfBirth: "2021-01-29", status: "Active", address: "896 Oak Ave, San Jose, CA 95107" },
  { firstName: "Bella", middleName: "Lace", lastName: "Kelly", dateOfBirth: "2019-05-12", status: "Inquiry", address: "907 Pine Rd, Fresno, CA 93707" },
  { firstName: "Caleb", middleName: "Reid", lastName: "Sanders", dateOfBirth: "2018-09-25", status: "Active", address: "118 Elm St, Long Beach, CA 90808" },
  { firstName: "Claire", middleName: "Wynn", lastName: "Price", dateOfBirth: "2020-02-08", status: "Onboarding", address: "229 Cedar Blvd, Oakland, CA 94607" },
  { firstName: "Ryan", middleName: "Jett", lastName: "Bennett", dateOfBirth: "2016-07-23", status: "Churned", address: "330 Birch Ln, Bakersfield, CA 93307" },
  { firstName: "Savannah", middleName: "Blu", lastName: "Wood", dateOfBirth: "2021-10-06", status: "Active", address: "441 Walnut Dr, Anaheim, CA 92807" },
  { firstName: "Nathan", middleName: "Cole", lastName: "Barnes", dateOfBirth: "2019-01-19", status: "Inquiry", address: "552 Spruce Way, San Diego, CA 92109" },
  { firstName: "Skylar", middleName: "Dove", lastName: "Ross", dateOfBirth: "2018-06-04", status: "Active", address: "663 Ash Ct, Los Angeles, CA 90008" },
  { firstName: "Eli", middleName: "Fox", lastName: "Henderson", dateOfBirth: "2020-10-17", status: "Onboarding", address: "774 Maple St, San Francisco, CA 94109" },
  { firstName: "Paisley", middleName: "Fawn", lastName: "Coleman", dateOfBirth: "2017-03-02", status: "Churned", address: "885 Oak Ave, Sacramento, CA 95821" },
  { firstName: "Aaron", middleName: "Stone", lastName: "Jenkins", dateOfBirth: "2021-08-15", status: "Active", address: "996 Pine Rd, San Jose, CA 95108" },
  { firstName: "Madeline", middleName: "Lark", lastName: "Perry", dateOfBirth: "2019-11-28", status: "Inquiry", address: "107 Elm St, Fresno, CA 93708" },
  { firstName: "Owen", middleName: "Boone", lastName: "Powell", dateOfBirth: "2018-04-13", status: "Active", address: "218 Cedar Blvd, Long Beach, CA 90809" },
  { firstName: "Violet", middleName: "Shea", lastName: "Long", dateOfBirth: "2020-07-26", status: "Onboarding", address: "329 Birch Ln, Oakland, CA 94608" },
  { firstName: "Jeremiah", middleName: "Clay", lastName: "Patterson", dateOfBirth: "2016-09-11", status: "Churned", address: "430 Walnut Dr, Bakersfield, CA 93308" },
  { firstName: "Lillian", middleName: "Opal", lastName: "Hughes", dateOfBirth: "2021-05-24", status: "Active", address: "541 Spruce Way, Anaheim, CA 92808" },
  { firstName: "Hunter", middleName: "Gauge", lastName: "Flores", dateOfBirth: "2019-08-07", status: "Inquiry", address: "652 Ash Pl, San Diego, CA 92110" },
  { firstName: "Anna", middleName: "Blythe", lastName: "Washington", dateOfBirth: "2018-01-22", status: "Active", address: "763 Maple St, Los Angeles, CA 90009" },
  { firstName: "Christian", middleName: "Ford", lastName: "Butler", dateOfBirth: "2020-05-05", status: "Onboarding", address: "874 Oak Ave, San Francisco, CA 94110" },
  { firstName: "Leah", middleName: "Wren", lastName: "Simmons", dateOfBirth: "2017-11-18", status: "Churned", address: "985 Pine Rd, Sacramento, CA 95822" },
  { firstName: "Jonathan", middleName: "Reed", lastName: "Foster", dateOfBirth: "2021-03-03", status: "Active", address: "196 Elm St, San Jose, CA 95109" },
  { firstName: "Audrey", middleName: "June", lastName: "Gonzales", dateOfBirth: "2019-06-16", status: "Inquiry", address: "207 Cedar Blvd, Fresno, CA 93709" },
  { firstName: "Easton", middleName: "Blaze", lastName: "Bryant", dateOfBirth: "2018-10-31", status: "Active", address: "318 Birch Ln, Long Beach, CA 90810" },
  { firstName: "Peyton", middleName: "Blair", lastName: "Alexander", dateOfBirth: "2020-01-13", status: "Onboarding", address: "429 Walnut Dr, Oakland, CA 94609" },
  { firstName: "Evan", middleName: "Chase", lastName: "Russell", dateOfBirth: "2016-06-28", status: "Churned", address: "530 Spruce Way, Bakersfield, CA 93309" },
  { firstName: "Sofia", middleName: "Luna", lastName: "Griffin", dateOfBirth: "2021-09-10", status: "Active", address: "641 Ash Ct, Anaheim, CA 92809" },
  { firstName: "Brayden", middleName: "Flint", lastName: "Diaz", dateOfBirth: "2019-12-23", status: "Inquiry", address: "752 Maple St, San Diego, CA 92111" },
  { firstName: "Alexa", middleName: "Neve", lastName: "Hayes", dateOfBirth: "2018-07-08", status: "Active", address: "863 Oak Ave, Los Angeles, CA 90010" },
  { firstName: "Kayden", middleName: "Steele", lastName: "Myers", dateOfBirth: "2020-04-21", status: "Onboarding", address: "974 Pine Rd, San Francisco, CA 94111" },
  { firstName: "Mackenzie", middleName: "Faye", lastName: "Ford", dateOfBirth: "2017-02-06", status: "Churned", address: "185 Elm St, Sacramento, CA 95823" },
  { firstName: "Colton", middleName: "Slade", lastName: "Hamilton", dateOfBirth: "2021-07-19", status: "Active", address: "296 Cedar Blvd, San Jose, CA 95110" },
  { firstName: "Piper", middleName: "Fern", lastName: "Graham", dateOfBirth: "2019-03-04", status: "Inquiry", address: "307 Birch Ln, Fresno, CA 93710" },
  { firstName: "Tristan", middleName: "Holt", lastName: "Sullivan", dateOfBirth: "2018-08-17", status: "Active", address: "418 Walnut Dr, Long Beach, CA 90811" },
  { firstName: "Naomi", middleName: "Bree", lastName: "Wallace", dateOfBirth: "2020-11-30", status: "Onboarding", address: "529 Spruce Way, Oakland, CA 94610" },
]

async function seed() {
  console.log("Seeding database...")
  await db.insert(patients).values(seedData)
  console.log("Done! 100 patients added.")
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})