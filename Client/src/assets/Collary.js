
/* eslint-disable */
export const Data = [
    {content:[
        {numbers:"" ,  text: "In The First Trick We Are Going To use Rounding"},
        {   
            numbers:"47 + 29" , 
            text:"In Question Like This We Can Round 29 to be 30 then add 30 to 47 which will easily be 77 then subtract the one leaving us with 76 as our answer"
            ,answer:false,
            draft:false,
        },
        {numbers:"123 + 78" ,
            text:"So in This Example Which number will be rounded",
            answer:{choices:["123" , "78"] , answer:"78"},
            draft:false
        },
        {
            numbers:"123 + 80",
            text:"So 78 will become 80 then what is 123 + 80",
            answer:{choices:["200" , "210" , "203" , "199"] , answer:"203"},
            draft:-2
        },
        {
            numbers:"203 - 2",
            text:"Then We Subtract the 2 we added to 78 in the first",
            answer:{choices:["201" , "200"] , answer:"201"},
            draft:false
        }
    ] , type:"lesson"},
    {
        content:[
            {
                question:"47 + 29" , choices:["76" , "75" , "82" ,"72"] , answer:"76" , type:0
            },
            {
                question:"68 + 45" , choices:["110" , "113" , "111" , "112"] , answer:"113",type:0
            },
            {
                question:"125 + 38" , choices:["167" , "173" , "163" , "153"] , answer:"163", type:0
            },
            {
                question:"78 + 45" , choices:["129" , "123" , "122" , "133"] , answer:"123" , type:0
            },
            {
                question:"13 + 28" , choices:["41" , "47" , "51" , "57"] , answer:"41" , type: 0
            },
        ],
    type:"practice"},
    {content:
        [
            {numbers:"" , text:"In This Trick We Are Going To Redistribute Numbers to Add Them"},
            {numbers:"55 + 37" , text:"In This Example We Can Redistribute This To be (50 + 30) + (5 + 7) Which is Much Easiar Than The Original One"},
            {numbers:"72 + 49" , text:"Now How Are We Going To Distribute This One" , answer:{choices:["(70 + 40) + (9 + 2)" , "42 + 79"] , answer:"(70 + 40) + (9 + 2)"}},
            {numbers:"(70 + 40) + (9 + 2)" , text:"Simplify It Now" , answer:{choices:["110 + 14" , "110 + 11" , "123 + 11"] , answer:"110 + 11"}},
            {numbers:"110 + 11" , text:"..." , answer:{choices:["124" , "111" , "121"] , answer:"121"}},
            {numbers:"" , text:"See That is Much Easiar.... ,  You Can Train on Adding Numbers in The Practice Section Up There"}
        ],
        type:"lesson"
    }


]

