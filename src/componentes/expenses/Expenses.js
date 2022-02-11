import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')
    const filterChangeHandler = (selectedyear) => {
        setFilteredYear(selectedyear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    }
    )

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}


export default Expenses;