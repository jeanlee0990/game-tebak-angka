function startGame() {
    let player1Score = 0;
    let player2Score = 0;
    const maxRounds = 5;

    for (let round = 1; round <= maxRounds; round++) {
        alert(`Ronde ${round}`);
        
        // Generate a random number between 1 and 3
        const targetNumber = Math.floor(Math.random() * 3) + 1;

        // Player 1's turn
        let player1Guess = prompt("Player 1, masukkan tebakan Anda (1-3):");
        player1Guess = parseInt(player1Guess);

        if (isNaN(player1Guess) || player1Guess < 1 || player1Guess > 3) {
            alert("Masukkan angka antara 1 dan 3 saja!");
            round--; // Repeat the round if input is invalid
            continue;
        }

        // Player 2's turn with validation to prevent the same guess as Player 1
        let player2Guess;
        do {
            player2Guess = prompt("Player 2, masukkan tebakan Anda (1-3):");
            player2Guess = parseInt(player2Guess);

            if (isNaN(player2Guess) || player2Guess < 1 || player2Guess > 3) {
                alert("Masukkan angka antara 1 dan 3 saja!");
                round--; // Repeat the round if input is invalid
                continue;
            }

            if (player2Guess === player1Guess) {
                alert("Tebakan tidak boleh sama, tebak angka lain!");
            }
        } while (player2Guess === player1Guess);

        // Check both players' guesses
        let player1Result = player1Guess === targetNumber ? "benar" : "salah";
        let player2Result = player2Guess === targetNumber ? "benar" : "salah";

        // Update scores
        if (player1Guess === targetNumber) player1Score++;
        if (player2Guess === targetNumber) player2Score++;

        // Show round result
        alert(`Hasil Tebakan Ronde ${round}:\nPlayer 1: ${player1Result}\nPlayer 2: ${player2Result}\nJawaban yang benar adalah: ${targetNumber}`);
    }

    // Determine the winner
    let resultMessage = `Skor akhir:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}\n`;
    if (player1Score > player2Score) {
        resultMessage += "Player 1 menang!";
    } else if (player2Score > player1Score) {
        resultMessage += "Player 2 menang!";
    } else {
        resultMessage += "Pertandingan seri!";
    }

    document.getElementById("result").innerText = resultMessage;
}
