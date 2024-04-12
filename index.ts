#!/usr/bin/env node
import inquirer from "inquirer";

async function main() {
    let birthDay = await inquirer.prompt([
        {
            name: "month",
            message: "Please enter your birth month (1-12):",
            type: "input"
        },
        {
            name: "day",
            message: "Please enter your birth day (1-31):"
        }
    ]);

        const month = parseInt(birthDay.month);
    const day = parseInt(birthDay.day);

    function getZodiacSign(month: number, day: number): string {
        const zodiacSigns: string[] = [
            "Capricorn",
            "Aquarius",
            "Pisces",
            "Aries",
            "Taurus",
            "Gemini",
            "Cancer",
            "Leo",
            "Virgo",
            "Libra",
            "Scorpio",
            "Sagittarius",
            "Capricorn" 
        ];

        const cutoffDates: number[] = [
            20, // January
            19, // February
            20, // March
            20, // April
            20, // May
            21, // June
            22, // July
            22, // August
            22, // September
            22, // October
            21, // November
            21, // December
        ];

        month -= 1; 

        if (day <= cutoffDates[month]) {
            return zodiacSigns[month];
        } else {
            return zodiacSigns[(month + 1) % 12];
        }
    }

    const zodiacSign = getZodiacSign(month, day);
    console.log(`Zodiac sign: ${zodiacSign}`);
}

main();
