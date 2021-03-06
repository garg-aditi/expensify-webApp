import React from 'react';
import {connect} from'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = (expense) =>{
        //    console.log('updated' , expense);
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
       }

    onRemove= ()=>{
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }

       render(){
           return (
            <div>
            <ExpenseForm 
            expense = {this.props.expense}    
             onSubmit = {this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove</button>
            </div>
           );
       }
}

// const EditExpensePage= (props)=>{
//     console.log(props);
//     return (
       
// );
// }

const mapStateToProps = (state,props)=>{
    return {
      expense : state.expenses.find((expense) =>{
          return expense.id === props.match.params.id;
      })
    };
};

const mapDispatchToProps = (dispatch)=>({
       editExpense : (id, expense)=>dispatch(editExpense(id, expense)),
        removeExpense: (data)=> dispatch(removeExpense(data))

});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
// edit page {props.match.params.id}