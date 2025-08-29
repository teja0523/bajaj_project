const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
    try {
        const input = req.body.data || [];
        
        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];
        let special_characters = [];
        let sum = 0;
        let concatString = '';

        input.forEach(item => {
            if (!isNaN(item)) { 
                const num = parseInt(item);
                sum += num;
                if (num % 2 === 0) even_numbers.push(item.toString());
                else odd_numbers.push(item.toString());
            } else if (/^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                concatString += item; 
            } else { 
                special_characters.push(item);
            }
        });

        concatString = concatString.split('').reverse().map((c, i) => {
            return i % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
        }).join('');

        res.json({
            is_success: true,
            user_id: "Teja_Sri_23052005",   
            email: "teja@abc.com",          
            roll_number: "22BCE20301",        
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string: concatString
        });

    } catch (err) {
        res.json({ is_success: false, message: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
