import "./StatItem.scss"

const StatItem = ({ title, num, theme }) => {
    return (
        <div className="statItem">
            <h4 className="statItem__title">{title}</h4>
            <div className={`statItem__num statItem__num_${theme.theme}`}>{num}</div>
        </div>
    )
}

export default StatItem;