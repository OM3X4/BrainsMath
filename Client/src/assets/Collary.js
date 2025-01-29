/* eslint-disable */
export const Data = [
  // lesson one Rounding
  {
    content: [
      { numbers: "", text: "In The First Trick We Are Going To use Rounding" },
      {
        numbers: "47 + 29",
        text: "In Question Like This We Can Round 29 to be 30 then add 30 to 47 which will easily be 77 then subtract the one leaving us with 76 as our answer",
        answer: false,
        draft: false,
      },
      {
        numbers: "123 + 78",
        text: "So in This Example Which number will be rounded",
        answer: { choices: ["123", "78"].sort(() => Math.random() - 0.5), answer: "78" },
        draft: false,
      },
      {
        numbers: "123 + 80",
        text: "So 78 will become 80 then what is 123 + 80",
        answer: { choices: ["200", "210", "203", "199"].sort(() => Math.random() - 0.5), answer: "203" },
        draft: -2,
      },
      {
        numbers: "203 - 2",
        text: "Then We Subtract the 2 we added to 78 in the first",
        answer: { choices: ["201", "200"].sort(() => Math.random() - 0.5), answer: "201" },
        draft: false,
      },
    ],
    type: "lesson",
  },
  {
    content: [
      {
        question: "47 + 29",
        choices: ["76", "75", "82", "72"].sort(() => Math.random() - 0.5),
        answer: "76",
        type: 0,
      },
      {
        question: "68 + 45",
        choices: ["110", "113", "111", "112"].sort(() => Math.random() - 0.5),
        answer: "113",
        type: 0,
      },
      {
        question: "125 + 38",
        choices: ["167", "173", "163", "153"].sort(() => Math.random() - 0.5),
        answer: "163",
        type: 0,
      },
      {
        question: "78 + 45",
        choices: ["129", "123", "122", "133"].sort(() => Math.random() - 0.5),
        answer: "123",
        type: 0,
      },
      {
        question: "13 + 28",
        choices: ["41", "47", "51", "57"].sort(() => Math.random() - 0.5),
        answer: "41",
        type: 0,
      },
    ],
    type: "practice",
  },
  // lesson 2 distribution
  {
    content: [
      {
        numbers: "",
        text: "In This Trick We Are Going To Redistribute Numbers to Add Them",
      },
      {
        numbers: "55 + 37",
        text: "In This Example We Can Redistribute This To be (50 + 30) + (5 + 7) Which is Much Easiar Than The Original One",
      },
      {
        numbers: "72 + 49",
        text: "Now How Are We Going To Distribute This One",
        answer: {
          choices: ["(70 + 40) + (9 + 2)", "42 + 79"].sort(() => Math.random() - 0.5),
          answer: "(70 + 40) + (9 + 2)",
        },
      },
      {
        numbers: "(70 + 40) + (9 + 2)",
        text: "Simplify It Now",
        answer: {
          choices: ["110 + 14", "110 + 11", "123 + 11"].sort(() => Math.random() - 0.5),
          answer: "110 + 11",
        },
      },
      {
        numbers: "110 + 11",
        text: "...",
        answer: { choices: ["124", "111", "121"].sort(() => Math.random() - 0.5), answer: "121" },
      },
      {
        numbers: "",
        text: "See That is Much Easiar.... ,  You Can Train on Adding Numbers in The Practice Section Up There",
      },
    ],
    type: "lesson",
  },
  {
    content: [
      {
        question: "12 + 15",
        choices: ["27", "25", "30", "22"].sort(() => Math.random() - 0.5),
        answer: "27",
        type: 0,
      },
      {
        question: "23 + 17",
        choices: ["40", "38", "42", "36"].sort(() => Math.random() - 0.5),
        answer: "40",
        type: 0,
      },
      {
        question: "45 + 36",
        choices: ["81", "79", "85", "77"].sort(() => Math.random() - 0.5),
        answer: "81",
        type: 0,
      },
      {
        question: "67 + 28",
        choices: ["95", "93", "97", "89"].sort(() => Math.random() - 0.5),
        answer: "95",
        type: 0,
      },
      {
        question: "89 + 34",
        choices: ["123", "121", "125", "119"].sort(() => Math.random() - 0.5),
        answer: "123",
        type: 0,
      },
      {
        question: "123 + 456",
        choices: ["579", "569", "589", "559"].sort(() => Math.random() - 0.5),
        answer: "579",
        type: 0,
      },
      {
        question: "789 + 234",
        choices: ["1023", "1013", "1033", "1003"].sort(() => Math.random() - 0.5),
        answer: "1023",
        type: 0,
      },
      {
        question: "567 + 432",
        choices: ["999", "989", "1009", "979"].sort(() => Math.random() - 0.5),
        answer: "999",
        type: 0,
      },
      {
        question: "876 + 345",
        choices: ["1221", "1211", "1231", "1201"].sort(() => Math.random() - 0.5),
        answer: "1221",
        type: 0,
      },
      {
        question: "999 + 111",
        choices: ["1110", "1100", "1120", "1090"].sort(() => Math.random() - 0.5),
        answer: "1110",
        type: 0,
      },
    ],
    type: "practice",
  },
  // lesson 3 subtracting by counting
  {
    content: [
      {
        numbers: "",
        text: "In this subtraction trick, we are going to use **counting up** from the smaller number to the bigger number. This method helps make subtraction easier and faster!",
      },
      {
        numbers: "25 − 18",
        text: "Let's solve this step by step. Start counting from 18 to 25. First, add 2 to 18 to reach 20. Then, add 5 to 20 to reach 25. Now, add the steps together: 2 + 5 = 7. So, 25 − 18 = 7.",
      },
      {
        numbers: "42 − 36",
        text: "Let's try another example. Start counting from 36 to 42. First, add 4 to 36 to reach 40. Then, add 2 to 40 to reach 42. Now, add the steps together: 4 + 2 = 6. So, 42 − 36 = ?",
        answer: {
          choices: ["6", "8", "4", "10"],
          answer: "6",
        },
      },
      {
        numbers: "57 − 49",
        text: "From which number should we start counting?",
        answer: {
          choices: ["57", "49"],
          answer: "49",
        },
      },
      {
        numbers: "57 − 49",
        text: "Now, let's solve 57 − 49. Start counting from 49 to 57. First, add 1 to 49 to reach 50. Then, add 7 to 50 to reach 57. Now, add the steps together: 1 + 7 = 8. So, 57 − 49 = ?",
        answer: {
          choices: ["8", "9", "10", "7"],
          answer: "8",
        },
      },
      {
        numbers: "74 − 68",
        text: "Let's practice again. Start counting from 68 to 74. First, add 2 to 68 to reach 70. Then, add 4 to 70 to reach 74. Now, add the steps together: 2 + 4 = 6. So, 74 − 68 = ?",
        answer: {
          choices: ["6", "8", "5", "7"],
          answer: "6",
        },
      },
      {
        numbers: "105 − 97",
        text: "Let's try a bigger number. Start counting from 97 to 105. First, add 3 to 97 to reach 100. Then, add 5 to 100 to reach 105. Now, add the steps together: 3 + 5 = 8. So, 105 − 97 = ?",
        answer: {
          choices: ["8", "10", "7", "9"],
          answer: "8",
        },
      },
      {
        numbers: "120 − 113",
        text: "Let's solve 120 − 113. Start counting from 113 to 120. First, add 7 to 113 to reach 120. So, 120 − 113 = ?",
        answer: {
          choices: ["7", "8", "9", "10"],
          answer: "7",
        },
      },
      {
        numbers: "150 − 142",
        text: "Let's try another one. Start counting from 142 to 150. First, add 8 to 142 to reach 150. So, 150 − 142 = ?",
        answer: {
          choices: ["8", "7", "9", "10"],
          answer: "8",
        },
      },
      {
        numbers: "200 − 193",
        text: "Finally, let's solve 200 − 193. Start counting from 193 to 200. First, add 7 to 193 to reach 200. So, 200 − 193 = ?",
        answer: {
          choices: ["7", "8", "9", "10"],
          answer: "7",
        },
      },
    ],
  },
  {
    "content": [
      {
        "question": "34 − 27",
        "choices": ["7", "10", "5", "0"].sort(() => Math.random() - 0.5),
        "answer": "7",
        "type": 1
      },
      {
        "question": "51 − 45",
        "choices": ["6", "10", "5", "0"].sort(() => Math.random() - 0.5),
        "answer": "6",
        "type": 1
      },
      {
        "question": "62 − 49",
        "choices": ["13", "10", "15", "20"].sort(() => Math.random() - 0.5),
        "answer": "13",
        "type": 1
      },
      {
        "question": "78 − 59",
        "choices": ["19", "20", "15", "10"].sort(() => Math.random() - 0.5),
        "answer": "19",
        "type": 1
      },
      {
        "question": "84 − 66",
        "choices": ["18", "20", "15", "10"].sort(() => Math.random() - 0.5),
        "answer": "18",
        "type": 1
      },
      {
        "question": "125 − 96",
        "choices": ["29", "30", "25", "20"].sort(() => Math.random() - 0.5),
        "answer": "29",
        "type": 1
      },
      {
        "question": "142 − 104",
        "choices": ["38", "40", "35", "30"].sort(() => Math.random() - 0.5),
        "answer": "38",
        "type": 1
      },
      {
        "question": "207 − 154",
        "choices": ["53", "50", "55", "60"].sort(() => Math.random() - 0.5),
        "answer": "53",
        "type": 1
      },
      {
        "question": "316 − 238",
        "choices": ["78", "80", "75", "70"].sort(() => Math.random() - 0.5),
        "answer": "78",
        "type": 1
      },
      {
        "question": "435 − 289",
        "choices": ["146", "150", "140", "145"].sort(() => Math.random() - 0.5),
        "answer": "146",
        "type": 1
      }
    ],
    "type": "practice"
  },
  // lesson 4 subtracting by rounding
  {
    "content": [
      {
        "numbers": "",
        "text": "We can also use **rounding** in subtraction to make calculations easier. Rounding helps simplify numbers so that subtraction becomes quicker and more intuitive."
      },
      {
        "numbers": "75 − 48",
        "text": "For example, to solve 75 − 48, we can round 48 to 50. Subtract 50 from 75 to get 25. Since we rounded up by 2, add 2 back to the result: 25 + 2 = 27. So, 75 − 48 = 27."
      },
      {
        "numbers": "92 − 57",
        "text": "Let's try another example. Round 57 to 60. Subtract 60 from 92 to get 32. Since we rounded up by 3, add 3 back to the result: 32 + 3 = 35. So, 92 − 57 = 35."
      },
      {
        "numbers": "85 − 39",
        "text": "Now it's your turn! Use rounding to solve 85 − 39. What is the answer?",
        "answer": {
          "choices": ["46", "44", "48", "50"],
          "answer": "46"
        }
      }
    ],
    "type": "lesson"
  },
  {
    "content": [
      {
        "question": "134 − 127",
        "choices": ["7", "10", "5", "0"].sort(() => Math.random() - 0.5),
        "answer": "7",
        "type": 1
      },
      {
        "question": "251 − 245",
        "choices": ["6", "10", "5", "0"].sort(() => Math.random() - 0.5),
        "answer": "6",
        "type": 1
      },
      {
        "question": "362 − 349",
        "choices": ["13", "10", "15", "20"].sort(() => Math.random() - 0.5),
        "answer": "13",
        "type": 1
      },
      {
        "question": "578 − 559",
        "choices": ["19", "20", "15", "10"].sort(() => Math.random() - 0.5),
        "answer": "19",
        "type": 1
      },
      {
        "question": "784 − 766",
        "choices": ["18", "20", "15", "10"].sort(() => Math.random() - 0.5),
        "answer": "18",
        "type": 1
      },
      {
        "question": "1258 − 996",
        "choices": ["262", "260", "265", "250"].sort(() => Math.random() - 0.5),
        "answer": "262",
        "type": 1
      },
      {
        "question": "2142 − 2044",
        "choices": ["98", "100", "95", "90"].sort(() => Math.random() - 0.5),
        "answer": "98",
        "type": 1
      },
      {
        "question": "3207 − 2154",
        "choices": ["1053", "1100", "1000", "950"].sort(() => Math.random() - 0.5),
        "answer": "1053",
        "type": 1
      },
      {
        "question": "4316 − 3238",
        "choices": ["1078", "1100", "1050", "1000"].sort(() => Math.random() - 0.5),
        "answer": "1078",
        "type": 1
      },
      {
        "question": "5435 − 4289",
        "choices": ["1146", "1150", "1100", "1200"].sort(() => Math.random() - 0.5),
        "answer": "1146",
        "type": 1
      }
    ],
    "type": "practice"
  },
  // lesson 5 Multiplictaion by 11
  {
    "content": [
      {
        "numbers": "",
        "text": "To multiply any number by 11, **split the digits, add adjacent pairs, and place the sums in the middle**. If any sum exceeds 9, carry over the extra digit. This method works for both two-digit and three-digit numbers."
      },
      {
        "numbers": "23 × 11",
        "text": "For a two-digit number like 23 × 11:\n1. Split 2 and 3: **2 _ 3**\n2. Add 2 + 3 = **5**\n3. Place 5 in the middle: **253**. So, 23 × 11 = 253."
      },
      {
        "numbers": "48 × 11",
        "text": "Let’s try a case where the digits add to more than 9. For 48 × 11:\n1. Split 4 and 8: **4 _ 8**\n2. Add 4 + 8 = **12**\n3. Place 2 in the middle and carry over 1: **4→(4+1)=5** → **528**. So, 48 × 11 = 528."
      },
      {
        "numbers": "123 × 11",
        "text": "For a three-digit number like 123 × 11:\n1. Split 1, 2, and 3: **1 _ _ _ 3**\n2. Add 1 + 2 = **3**, and 2 + 3 = **5**\n3. Place 3 and 5 in the middle: **1353**. So, 123 × 11 = 1353."
      },
      {
        "numbers": "456 × 11",
        "text": "Let’s try a case where the sums exceed 9. For 456 × 11:\n1. Split 4, 5, and 6: **4 _ _ _ 6**\n2. Add 4 + 5 = **9**, and 5 + 6 = **11**\n3. Place 9 and 1 in the middle, and carry over 1 to the left: **4→(4+1)=5** → **5016**. So, 456 × 11 = 5016."
      },
      {
        "numbers": "67 × 11",
        "text": "Now it’s your turn! Use the split-and-add method to solve 67 × 11. What is the answer?",
        "answer": {
          "choices": ["737", "6137", "667", "727"],
          "answer": "737"
        }
      },
      {
        "numbers": "789 × 11",
        "text": "Now try a three-digit number. Use the split-and-add method to solve 789 × 11. What is the answer?",
        "answer": {
          "choices": ["8679", "8678", "8779", "8677"],
          "answer": "8679"
        }
      }
    ],
    "type": "lesson"
  },
  {
    "content": [
      {
        "question": "34 × 11",
        "choices": ["374", "334", "364", "354"].sort(() => Math.random() - 0.5),
        "answer": "374",
        "type": 2
      },
      {
        "question": "52 × 11",
        "choices": ["572", "522", "562", "552"].sort(() => Math.random() - 0.5),
        "answer": "572",
        "type": 2
      },
      {
        "question": "78 × 11",
        "choices": ["858", "818", "848", "838"].sort(() => Math.random() - 0.5),
        "answer": "858",
        "type": 2
      },
      {
        "question": "95 × 11",
        "choices": ["1045", "945", "995", "1035"].sort(() => Math.random() - 0.5),
        "answer": "1045",
        "type": 2
      },
      {
        "question": "123 × 11",
        "choices": ["1353", "1333", "1343", "1363"].sort(() => Math.random() - 0.5),
        "answer": "1353",
        "type": 2
      },
      {
        "question": "234 × 11",
        "choices": ["2574", "2534", "2564", "2544"].sort(() => Math.random() - 0.5),
        "answer": "2574",
        "type": 3
      },
      {
        "question": "345 × 11",
        "choices": ["3795", "3755", "3785", "3765"].sort(() => Math.random() - 0.5),
        "answer": "3795",
        "type": 3
      },
      {
        "question": "567 × 11",
        "choices": ["6237", "6137", "6247", "6147"].sort(() => Math.random() - 0.5),
        "answer": "6237",
        "type": 3
      },
      {
        "question": "789 × 11",
        "choices": ["8679", "8579", "8689", "8589"].sort(() => Math.random() - 0.5),
        "answer": "8679",
        "type": 3
      },
      {
        "question": "999 × 11",
        "choices": ["10989", "10889", "10999", "10899"].sort(() => Math.random() - 0.5),
        "answer": "10989",
        "type": 3
      }
    ],
    "type": "practice"
  },
  //lesson 6 multiplying 1 by 2
  {
    content: [
      {numbers:"" , text:"In This Trick We will multiply 1 digit Number by 2 digit Number (**Memorizing Multiplication Table Required**)"},
      {numbers:"3 × 47" , text:"In This Example We Are Going To Distribute the Problem INTO 3  (40 + 7) Which is Equal To (3 × 40) + (3 × 21) Which Is Equal To 141 "},
      {numbers:"5 × 29" , text:"Solve This One" , answer:{choices:["145" , "245" , "123" , "223"].sort(() => Math.random() - 0.5) , answer:"145"}},
      {numbers:"6 × 378" , text:"Solve This 3 Digits One **The Same Idea**" , answer:{choices:["2268" , "1828" , "2018" , "2918"].sort(() => Math.random - 0.5) , answer:"2268"}}
    ]
  },
  {
    "content": [
      {
        "question": "3 × 45",
        "choices": ["135", "140", "130", "125"].sort(() => Math.random() - 0.5),
        "answer": "135",
        "type": 2
      },
      {
        "question": "7 × 23",
        "choices": ["161", "160", "165", "170"].sort(() => Math.random() - 0.5),
        "answer": "161",
        "type": 2
      },
      {
        "question": "5 × 120",
        "choices": ["600", "610", "590", "605"].sort(() => Math.random() - 0.5),
        "answer": "600",
        "type": 2
      },
      {
        "question": "9 × 56",
        "choices": ["504", "500", "510", "495"].sort(() => Math.random() - 0.5),
        "answer": "504",
        "type": 2
      },
      {
        "question": "4 × 250",
        "choices": ["1000", "1010", "990", "995"].sort(() => Math.random() - 0.5),
        "answer": "1000",
        "type": 2
      },
      {
        "question": "6 × 78",
        "choices": ["468", "470", "460", "465"].sort(() => Math.random() - 0.5),
        "answer": "468",
        "type": 2
      },
      {
        "question": "8 × 99",
        "choices": ["792", "800", "790", "795"].sort(() => Math.random() - 0.5),
        "answer": "792",
        "type": 2
      },
      {
        "question": "2 × 345",
        "choices": ["690", "700", "680", "695"].sort(() => Math.random() - 0.5),
        "answer": "690",
        "type": 2
      },
      {
        "question": "9 × 123",
        "choices": ["1107", "1110", "1100", "1105"].sort(() => Math.random() - 0.5),
        "answer": "1107",
        "type": 2
      },
      {
        "question": "7 × 89",
        "choices": ["623", "630", "620", "625"].sort(() => Math.random() - 0.5),
        "answer": "623",
        "type": 2
      }
    ],
    "type": "practice"
  },
  // lesson 7 multiplying 2 digits with the same tenth and sum of ones is 10
  {
    content:[
      {numbers:"" , text:"This Trick Exactly Is Very Specific Where The Two numbers Must Have The Same Tenth and The Sum Of The Ones is 10 like 47 × 43 And Also Must Be two Digits × two Digits"},
      {numbers:"36 × 34" ,  text:"In This Example The Tenths Are Equal(3) and The Ones Sum Is Equal To 10 ... ,  Then This problem is Eligible"},
      {numbers:"36 × 34" , text:"We Take The Product Of the Tenth And The number **After** It(3 and 4 as 3 + 1 = 4) , Which is 12 and the Product Of The Ones(6 * 4) Which is Equal To 24 ... , Then The Answer Is 1224 , Which is (12)(24)"},
      {numbers:"73 × 77" , text:"Solve This Now" , answer:{choices:["5621" , "5628" , "2156" , "2856"].sort(() => Math.random - 0.5) , answer:"5621"}},
      {numbers:"" , text:"I Think This is The Easiest Trick Till Now "}
    ],
    type:"lesson"
  },
  {
    "content": [
      {
        "question": "47 × 43",
        "choices": ["2021", "2024", "2120", "2420"].sort(() => Math.random() - 0.5),
        "answer": "2021",
        "type": 3
      },
      {
        "question": "52 × 58",
        "choices": ["3016", "3020", "3116", "3216"].sort(() => Math.random() - 0.5),
        "answer": "3016",
        "type": 3
      },
      {
        "question": "61 × 69",
        "choices": ["4209", "4210", "4309", "4409"].sort(() => Math.random() - 0.5),
        "answer": "4209",
        "type": 3
      },
      {
        "question": "74 × 76",
        "choices": ["5624", "5620", "5724", "5824"].sort(() => Math.random() - 0.5),
        "answer": "5624",
        "type": 3
      },
      {
        "question": "83 × 87",
        "choices": ["7221", "7220", "7321", "7421"].sort(() => Math.random() - 0.5),
        "answer": "7221",
        "type": 3
      },
      {
        "question": "92 × 98",
        "choices": ["9016", "9020", "9116", "9216"].sort(() => Math.random() - 0.5),
        "answer": "9016",
        "type": 3
      },
      {
        "question": "25 × 25",
        "choices": ["625", "620", "630", "635"].sort(() => Math.random() - 0.5),
        "answer": "625",
        "type": 3
      },
      {
        "question": "36 × 34",
        "choices": ["1224", "1220", "1324", "1424"].sort(() => Math.random() - 0.5),
        "answer": "1224",
        "type": 3
      },
      {
        "question": "49 × 41",
        "choices": ["2009", "2010", "2109", "2209"].sort(() => Math.random() - 0.5),
        "answer": "2009",
        "type": 3
      },
      {
        "question": "68 × 62",
        "choices": ["4216", "4220", "4316", "4416"].sort(() => Math.random() - 0.5),
        "answer": "4216",
        "type": 3
      }
    ],
    "type": "practice"
  },
  //lesson 8 multiplying any 2 digits
  {
    "content": [
      {
        "numbers": "35 × 74",
        "text": "We will calculate (35 × 74) using (ac_(bc + ad)_bd), where (a = 3), (b = 5), (c = 7), and (d = 4). The trick works by breaking the numbers into tens and ones."
      },
      {
        "numbers": "35 × 74",
        "text": "Step 1: Multiply the tens place digits (a × c). Here, (3 × 7 = 21). This forms the first part of the result."
      },
      {
        "numbers": "35 × 74",
        "text": "Step 2: Cross-multiply ( b × c + a × d ). Multiply  (b) and (c), and (a) and (d), then add the results. Here, ((5 × 7) + (3 × 4)) = 35 + 12 = 47."
      },
      {
        "numbers": "35 × 74",
        "text": "Step 3: Multiply the ones place digits (b × d). Here, (5 × 4 = 20). This forms the last part of the result."
      },
      {
        "numbers": "21_47_20",
        "text": "Step 4: Combine the parts as (ac_(bc + ad)_bd). So, the answer is 21_47_20 (After Carrying The Ones) It Becomes (2590)."
      },
      {
        "numbers": "48 × 36",
        "text": "Now try this: Multiply 48 × 36 using the same method (ac_(bc + ad)_bd).",
        "answer": {
          "choices": ["1728", "1738", "1628", "1748"].sort(() => Math.random() - 0.5),
          "answer": "1728"
        }
      },
      {
        "numbers": "Summary",
        "text": "The trick involves breaking the numbers into tens and ones, performing partial multiplications, and combining the results in the format \( ac\_(bc + ad)\_bd \) to get the final answer."
      }
    ],
    "type": "lesson"
  },
  {
    "content": [
      {
        "question": "34 × 45",
        "choices": ["1530", "1520", "1534", "1540"].sort(() => Math.random() - 0.5),
        "answer": "1530",
        "type": 3
      },
      {
        "question": "61 × 72",
        "choices": ["4392", "4400", "4320", "4328"].sort(() => Math.random() - 0.5),
        "answer": "4392",
        "type": 3
      },
      {
        "question": "56 × 67",
        "choices": ["3752", "3760", "3742", "3754"].sort(() => Math.random() - 0.5),
        "answer": "3752",
        "type": 3
      },
      {
        "question": "82 × 91",
        "choices": ["7462", "7472", "7482", "7452"].sort(() => Math.random() - 0.5),
        "answer": "7462",
        "type": 3
      },
      {
        "question": "63 × 84",
        "choices": ["5292", "5252", "5262", "5232"].sort(() => Math.random() - 0.5),
        "answer": "5292",
        "type": 3
      },
      {
        "question": "49 × 56",
        "choices": ["2744", "2736", "2756", "2748"].sort(() => Math.random() - 0.5),
        "answer": "2744",
        "type": 3
      },
      {
        "question": "71 × 62",
        "choices": ["4402", "4302", "4322", "4352"].sort(() => Math.random() - 0.5),
        "answer": "4402",
        "type": 3
      },
      {
        "question": "54 × 78",
        "choices": ["4212", "4222", "4242", "4262"].sort(() => Math.random() - 0.5),
        "answer": "4212",
        "type": 3
      },
      {
        "question": "64 × 53",
        "choices": ["3392", "3402", "3372", "3382"].sort(() => Math.random() - 0.5),
        "answer": "3392",
        "type": 3
      },
      {
        "question": "85 × 93",
        "choices": ["7905", "7915", "7925", "7935"].sort(() => Math.random() - 0.5),
        "answer": "7905",
        "type": 3
      }
    ],
    "type": "practice"
  },
  // lesson 9 Squaring digits Numbers
  {
    content:[
      {text: "This Trick Is For Squaring Two Digits Numbers" ,  numbers:""},
      {numbers:"23²" , text:"To Square This Number We Use The The eqn (a²_2ba_b²) where (a = 2, b = 3)"},
      {numbers:"23²" , text:"Then b² will be 9 and 2ba will be 12 and a² will be 4 Then The Answer Will Be (4)(12)(9) after Carrying (529)"},
      {numbers:"79²" , text:"Solve This Now..." , answer:{choices:["6241" , "6441" , "4981" , "4941"] , answer:"6241"}},
    ],
    type:"lesson"
  },
  {
    "content": [
      {
        "question": "12²",
        "choices": ["144", "148", "140", "136"].sort(() => Math.random() - 0.5),
        "answer": "144",
        "type": 6
      },
      {
        "question": "23²",
        "choices": ["529", "530", "525", "520"].sort(() => Math.random() - 0.5),
        "answer": "529",
        "type": 6
      },
      {
        "question": "34²",
        "choices": ["1156", "1160", "1150", "1140"].sort(() => Math.random() - 0.5),
        "answer": "1156",
        "type": 6
      },
      {
        "question": "45²",
        "choices": ["2025", "2030", "2015", "2005"].sort(() => Math.random() - 0.5),
        "answer": "2025",
        "type": 6
      },
      {
        "question": "56²",
        "choices": ["3136", "3140", "3125", "3130"].sort(() => Math.random() - 0.5),
        "answer": "3136",
        "type": 6
      },
      {
        "question": "67²",
        "choices": ["4489", "4490", "4480", "4475"].sort(() => Math.random() - 0.5),
        "answer": "4489",
        "type": 6
      },
      {
        "question": "78²",
        "choices": ["6084", "6090", "6075", "6080"].sort(() => Math.random() - 0.5),
        "answer": "6084",
        "type": 6
      },
      {
        "question": "89²",
        "choices": ["7921", "7930", "7915", "7925"].sort(() => Math.random() - 0.5),
        "answer": "7921",
        "type": 6
      },
      {
        "question": "14²",
        "choices": ["196", "200", "195", "190"].sort(() => Math.random() - 0.5),
        "answer": "196",
        "type": 6
      },
      {
        "question": "25²",
        "choices": ["625", "630", "620", "615"].sort(() => Math.random() - 0.5),
        "answer": "625",
        "type": 6
      },
      {
        "question": "36²",
        "choices": ["1296", "1300", "1290", "1285"].sort(() => Math.random() - 0.5),
        "answer": "1296",
        "type": 6
      },
      {
        "question": "47²",
        "choices": ["2209", "2210", "2205", "2200"].sort(() => Math.random() - 0.5),
        "answer": "2209",
        "type": 6
      },
      {
        "question": "58²",
        "choices": ["3364", "3370", "3355", "3360"].sort(() => Math.random() - 0.5),
        "answer": "3364",
        "type": 6
      },
      {
        "question": "69²",
        "choices": ["4761", "4770", "4755", "4765"].sort(() => Math.random() - 0.5),
        "answer": "4761",
        "type": 6
      },
      {
        "question": "72²",
        "choices": ["5184", "5190", "5175", "5180"].sort(() => Math.random() - 0.5),
        "answer": "5184",
        "type": 6
      }
    ],
    "type": "practice"
  },
  // lesson 10 rooting perfect squares
  {
    "content": [
      { "numbers": "", "text": "This trick will help you quickly find the square root of **perfect squares**." },
      { "numbers": "", "text": "The more squares you memorize, the wider the range of perfect squares you can root effortlessly." },
      { "numbers": "√3364", "text": "To determine the square root of this perfect square, you need to memorize the squares of numbers from 1 to 10.", "draft": "1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25, 6² = 36, 7² = 49, 8² = 64, 9² = 81, 0² = 0" },
      { "numbers": "√336**4**", "text": "Look at the last digit (4) and compare it with the table to find the numbers whose squares end in the same digit.", "draft": "1² = 1, **2² = 4**, 3² = 9, 4² = 16, 5² = 25, 6² = 36, 7² = 49, **8² = 64**, 9² = 81, 0² = 0" },
      { "numbers": "√33(2/8)", "text": "Replace the last two digits (64) with one of the two numbers whose squares end in 4 (2 or 8)." },
      { "numbers": "√**33**(2/8)", "text": "Now, focus on the remaining number (33) and find the largest perfect square less than or equal to it, which is **25**. The square root of 25 is **5**." },
      { "numbers": "√**33**(2/8)", "text": "Multiply this root (5) by the next number (6). If the result (30) is **less than** 33, choose the **larger digit** from (2, 8). Otherwise, take the **smaller digit**." },
      { "numbers": "√3364 = (5)(8)", "text": "Since 5 × 6 = 30 is less than 33, we choose 8. Combining this with 5 gives us **58** as the final answer." }
    ],
    "type": "lesson"
  },







];
