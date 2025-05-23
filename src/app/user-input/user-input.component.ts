import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = "";
  annualInvestment = "";
  expectedReturn= "";
  duration = "";
  investmentResultsService = inject(InvestmentResultsService);

  onSubmit() {
    this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: parseInt(this.initialInvestment),
      annualInvestment: parseInt(this.annualInvestment),
      expectedReturn: parseInt(this.expectedReturn),
      duration: parseInt(this.duration),
    });
  }
}
