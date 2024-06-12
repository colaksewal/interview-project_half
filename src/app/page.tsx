"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const initialSquares: (string | null)[] = Array(9).fill(null);
  const [squares, setSquares] = useState<(string | null)[]>(initialSquares);
  const [history, setHistory] = useState<(string | null)[][]>([]);

  const onBackButtonClick = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousState = newHistory.pop();
      if (previousState !== undefined) {
        setSquares(previousState);
        setHistory(newHistory);
        }
    } else {
      alert("Geri alınacak hamle yok.");
    }
  };

  const onSquareClick = (index: number) => {
    const newSquares = squares.slice();
    if (newSquares[index] === "X") {
      newSquares[index] = null; 
    } else if (newSquares[index] === null) {
      newSquares[index] = "X";  
    }
    setHistory([...history, squares]);
    setSquares(newSquares);
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>
        {squares.map((square, index) => (
          <div
            key={index}
            className={styles.square}
            onClick={() => onSquareClick(index)}
          >
            {square}
          </div>
        ))}
      </div>
    </main>
  );
}
