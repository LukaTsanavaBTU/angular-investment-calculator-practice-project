import { Injectable } from '@angular/core';
import { type InvestmentInput } from '../user-input/user-input.model';
import { type AnnualData } from './investment-results.model';

@Injectable({providedIn: 'root'})
export class InvestmentResultsService {
    private annualData : AnnualData[] = [];

    calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration} : InvestmentInput) {
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
            this.annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }
    }

    getInvestmentResults() {
        return this.annualData;
    }
}