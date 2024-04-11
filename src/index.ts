const express = require("express");
const app = express();

// Ricordarsi di farlo partire da /dist => node.index
// http://localhost:1000/calcolo?num1=X&num2=Y
// cambiare X e Y

app.get("/calcolo", (req: any, res: any) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2)
    return res.status(400).json({ error: "se necesitano dos numero" });

  const numero1 = parseFloat(num1);
  const numero2 = parseFloat(num2);

  const somma = numero1 + numero2;
  const sotraer = numero1 - numero2;
  const multiplicar = numero1 * numero2;
  const dividir = Math.trunc(numero1 / numero2);

  res.json({ somma, sotraer, multiplicar, dividir });
});
app.listen(1000, () => {
  console.log("server su 1000");
});
