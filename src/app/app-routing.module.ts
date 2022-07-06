import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { LoansComponent } from './loans/loans.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [

  // {
  //   //path and component configuration
  //   path: 'loans',
  //   component:LoansComponent
  
  // },
  // {
  //   //outlet example configuration
  //   path: 'add',
  //   component:AddLoansComponent,
  //   outlet:'addLoan'
  
  // },
  // {
  //   //child route configuration
  //   path: 'loan-type',
  //   component:LoanTypeComponent,
    
  // },


  //******************parametrized router */

  {
    //u need to write (:) colon
    path:'product/:red',
    component:ProductComponent
  },
  {
    path:'product/:productId/photos/:photoId',
    component:ProductComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
