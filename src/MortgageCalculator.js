import React,{useState} from "react";

const MortgageCalculator =()=>{
    const [loanAmount,setLoanAmount]=useState("");
    const[interestRate,setInterestRate] = useState("");
    const[loanTerm,setLoanTerm] = useState("");
    const [monthlyPayment,setMonthlyPayment] = useState(null);

    const calculateMortgage =()=>{
        if (!loanAmount || !interestRate || !loanTerm) return;
        const prinicipal=parseFloat(loanAmount);
        const annualInterest = parseFloat(interestRate)/100;
        const numberOfPayments = parseInt(loanTerm)*12;
        const monthlyInterest = annualInterest/12;

        const payment =(prinicipal*monthlyInterest)/(1-Math.pow(1+monthlyInterest,-numberOfPayments));

        setMonthlyPayment(payment.toFixed(2));
    };
    const reset =() =>{
        setLoanAmount("");
        setInterestRate("");
        setLoanTerm("");
        setMonthlyPayment(null);
    };
    return(
        <div style={styles.container}>
            <h2 style={styles.title}>MortgageCalculator</h2>

            <input
            type="number"
            placeholder="Loan Amount ($)"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            style={styles.input}/>

            <input
            type="number"
            placeholder="Annual Interest Rate (%)"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            style={styles.input}/>
            
            <input
            type="number"
            placeholder="Loan Term (Years)"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            style={styles.input}/>

            <div style={styles.buttonContainer}>
                <button onClick={calculateMortgage}
                    style={styles.buttonPrimary}>
                        Calculate
                 </button>
                 <button onClick={reset}
                 style={styles.buttonSecondary}>
                    Reset
                 </button>
                  </div>
                  {monthlyPayment && (
                    <div style={styles.resultsBox}>
                        <p style={styles.resultText}>Estimated Monthly payment: <strong>${monthlyPayment}</strong></p>
                         </div>
                  )}
                  </div>
    );

};
 const styles ={
                    container:{
                        maxWidth:"400px",
                        margin:"50px auto",
                        padding:"30px",
                        borderRadius:"10px",
                        backgrondColor:"#fff",
                        boxShadow:"0 0 15px rgba(0,0,0,0.1)",
                        textAlign:"center",
                        fontFamily:"Arial,sans-serif",
                    },
                    title:{
                        fontSize:"24px",
                        marginBottom:"20px",
                        color:"#333",
                    },
                    input:{
                        width:"100%",
                        padding:"12px",
                        margin:"10px 0",
                        borderRadius:"6px",
                        border:"1px solid #ccc",
                        fontSize:"16px",
                    },
                    buttonGroup:{
                        display:"flex",
                        justifyContent:"center",
                        marginTop:"10px",                       
                    },
                    buttonPrimary:{
                        flex: 1,
                        marginRiht: "10px",
                         padding:"10px 20px",
                        backgrondColor:"e0e0e0",
                        color:"333",
                        border:"none",
                        borderRadius:"6px",
                        cursor:"pointer",
                    },
                    buttonSecondary:{
                          flex: 1,
                        marginRight: "10px",
                        padding:"10px 20px",
                        backgrondColor:"e0e0e0",
                        color:"333",
                        border:"none",
                        borderRadius:"6px",
                        cursor:"pointer",
                    },
                    resultsBox:{
                        marginTop:"25px",
                        backgroungColor:"#f9f9f9",
                        padding:"20px",
                        borderRadius:"8px",
                    },
                    resultText:{
                        fontSize:"18px",
                        color:"#444",
                    },

                  };
                  export default MortgageCalculator;
    