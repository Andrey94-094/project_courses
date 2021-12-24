import "./Statistics.scss"
import Button from "../Button/index"
import StatItem from "./components/StatItem"
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';


class Statistics extends PureComponent {

    render() {
        const { theme } = this.props;

        const arrayStat = [
            { id: 1, title: "ГОРЯЧИЕ НАПРАВЛЕНИЯ", num: 37 },
            { id: 2, title: "ДОВОЛЬНЫЕ КЛИЕНТЫ", num: 677 },
            { id: 3, title: "ЧАШКИ КОФЕ", num: 87 },
            { id: 4, title: "ПОСЕТИЛИ СТРАНЫ", num: 107 },
        ]
        return (
            <section>
                <div className="statistics"></div>
                <div className="statistics__container">
                    <div className="statistics__container-title">
                        <h2 className={`${theme.theme}`}>Помогая Мечтам Исполняться</h2>
                    </div>
                    <div className="statistics__headSection">
                        Вы можете получить от нас столько помощи, сколько захотите. Тебе решать. Наконец, вы должны знать, что мы относимся к местным жителям с уважением и справедливостью. Это окупается загрузкой ведра, потому что заботливые местные жители позволяют ближе к их культуре, их людям и их природе. Что хорошо для них и хорошо для вас. Кроме того, если вы хотите, при бронировании отпуска мы оплатим однодневную поездку для малообеспеченного ребенка из развивающейся страны. в игровой парк, гору или музей и т. д. Мы называем это ответственным туризмом.
                    </div>
                    <div className="statistics__wrapper">
                        <Link to="/contacts/">
                            <Button
                                className={`button__${theme.theme}__pos`}
                                text="связаться" />
                        </Link>
                        <div className="statistics__inner">
                            {arrayStat.map((item) => (
                                <StatItem
                                    key={item.id}
                                    {...item}
                                    theme={theme} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = ({ theme }) => ({
    theme: theme,
});
export default connect(mapStateToProps)(Statistics);