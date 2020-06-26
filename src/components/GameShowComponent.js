import React from 'react'
import PropTypes from 'prop-types'


const GameShowComponent = () => (
    // ゲーム盤
    <div className={"container"}>
         <div className="row">
         <table border="1">
            <tr>
            <th>名前</th>
            <th>年齢</th>
            </tr>
            <tr>
            <td>田中</td>
            <td>27</td>
            </tr>
            <tr>
            <td>佐藤</td>
            <td>42</td>
            </tr>
        </table>

         </div>
    </div>
)

GameShowComponent.propTypes = {
    game: PropTypes.shape({}).isRequired,
    onBack: PropTypes.func.isRequired,
    onSelectKouho: PropTypes.func.isRequired,
}

export default GameShowComponent