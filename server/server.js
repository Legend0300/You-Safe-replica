express = require('express');
app = express();

app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.send("works!");
    }
);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);