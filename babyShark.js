function babySharkLyrics(){let s = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", 
"Grandpa shark", "Let's go hunt", "Run away,�"], t = ", doo doo doo doo doo doo", g = "";
for (let i = 0; i < s.length - 1; i++){g += (s[i] + t + "\n").repeat(3) + s[i] + "!" + "\n";
}return g + s[6];}
