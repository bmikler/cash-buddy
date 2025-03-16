import '../styles/expense-item.css'

export default function ExpenseItem(props: {description: string, value: number}) {
    return (
        <div className="expense-item">
            <span className="expense-description">{props.description}</span>
            <span className="expense-value">{props.value} PLN</span>
        </div>
    );
}