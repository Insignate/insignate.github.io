'use strict'
//getting form objects
const nudIncome = document.getElementById('applicant-income')
const nudIncomeRatio = document.getElementById('debit-ratio')
const nudYearsJob = document.getElementById('years-job')
const chkCriminal = document.getElementById('criminal')
const btnCheckLoan = document.getElementById('check-loan')
const spnErrors = document.getElementById('errors')
const lblSetLoan = document.getElementById('loan-result')

const loanStartText = "Loan Result: "
//checking loan
const checkLoan = () => {
  lblSetLoan.innerText = loanStartText
  spnErrors.innerText = ""
  const income = parseFloat(nudIncome.value)
  const incomeRatio = parseInt(nudIncomeRatio.value)
  const years = parseInt(nudYearsJob.value)
  const isCriminal = chkCriminal.checked
  
  if(isNaN(income))
    spnErrors.innerText = "Invalid Applicant Income"
  else if(income > 75000){
    if(isCriminal)lblSetLoan.innerText = loanStartText + "No Loan"
    else lblSetLoan.innerText = loanStartText + "Loan"
  }
  else if(income >= 35000 && income <= 75000){
    if(isNaN(years)){
      spnErrors.innerText = "Invalid Year(s) In Job"
      return
    }
    else if(years < 1 )lblSetLoan.innerText = loanStartText + "No Loan"
    else if(years > 5) lblSetLoan.innerText = loanStartText + "Loan"
    else lblSetLoan.innerText = "Could not determine loan"
  }
  else if(income < 30000){
    if(isNaN(incomeRatio)){
      spnErrors.innerText = "Invalid Income Ratio"
      return
    }
    else if(incomeRatio >= 50)lblSetLoan.innerText = loanStartText + 'No Loan'
    else lblSetLoan.innerText = loanStartText + 'Loan'
  }
  else lblSetLoan.innerText = "Could not determine loan"

}

//attach button event listener to the object (check loan)
btnCheckLoan.addEventListener("click",checkLoan)