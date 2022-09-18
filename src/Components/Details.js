
const Details = (props) => {
    return(
        <div className="margin-left">
            
            <table>
                <tr className="chBac">
                    <td>Name</td>
                    <td>Date</td>
                    <td>Rest</td>
                    <td>deposite</td>
                    <td>Status </td>
                </tr>
                <tr>
                <td>🎭 Mukeet</td>
                    <td>12/1/2020</td>
                    <td>$1400</td>
                    <td>$1000</td>
                    <td>pending &nbsp;&emsp; </td>
                    <td className={`${props.yl}`}>  </td>
                </tr>
                <tr>
                    <td>🍱Name</td>
                    <td>01/12/2019</td>
                    <td>$1488</td>
                    <td>$2000</td>
                    <td>paid&nbsp;&emsp; </td>
                    <td className={`${props.gr}`}>  </td>
                </tr>
            </table>
            <button>Submitted</button>
        </div>
    )
}
export default Details;