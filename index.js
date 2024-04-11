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
    // Parse the input strings into integers
    const month = parseInt(birthDay.month);
    const day = parseInt(birthDay.day);
    function getZodiacSign(month, day) {
        const zodiacSigns = [
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
            "Capricorn" // Capricorn again for December 22 - 31
        ];
        const cutoffDates = [
            20,
            19,
            20,
            20,
            20,
            21,
            22,
            22,
            22,
            22,
            21,
            21, // December
        ];
        month -= 1; // Adjust for 0-based index
        if (day <= cutoffDates[month]) {
            return zodiacSigns[month];
        }
        else {
            return zodiacSigns[(month + 1) % 12];
        }
    }
    const zodiacSign = getZodiacSign(month, day);
    console.log(`Zodiac sign: ${zodiacSign}`);
}
main();
