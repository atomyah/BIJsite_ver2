import React from "react"
//import { Link } from "gatsby"

import Layout from "../../components/layout"
//import Image from "../../components/image"
import SEO from "../../components/seo"

import { Container, Table } from 'react-bootstrap'
import Styles from './benzolist.module.css'
  
  const BenzoList = () => (
    <Layout>
      <Container fluid="md">
        <SEO title="ベンゾ一覧 - ジアゼパム換算表"
        description="抗不安薬・睡眠薬等価換算表、いわゆるジアゼパム換算表になります。日本特有の稲田式と世界標準であるアシュトン式とを掲載しています。ソラナックスやフルニトラゼパムなど数値の違うものがあるので注意してください" 
        image="/twitterimg/pict_benzolisteng.png" 
        lang="ja"
        />
        <h1 className={Styles.h1Size}>ベンゾ一覧 - ジアゼパム換算表<br /><small class="text-muted">抗不安薬・睡眠薬等価換算表</small></h1>
        ※ 日本では34種類のベンゾジアゼピン系薬剤が処方可能となっている（米国では5種類）。 そのため自分がベンゾを飲んでいるのかわかりにくい場合が多いと思います。 ぜひ自分の常用薬をチェックしてみてください。一般名となっているのがジェネリック名と同じです。
        <Table striped bordered hover size="sm" responsive>
        <tbody>
          <tr>
            <td rowspan="2"><strong>薬 効</strong></td>
            <td nowrap="2" rowspan="2"><strong>一般名</strong></td>
            <td rowspan="2"><strong>商品名</strong></td>
            <td rowspan="2"><strong>半減期</strong><br /><span className={Styles.fontSmall}>[活性代謝物]</span></td>
            <td colspan="2"><span className={Styles.fontRed}><strong>等価量</strong></span></td>
          </tr>
          <tr>
            <td><strong>世界基準</strong></td>
            <td><strong>稲田式</strong></td>
          </tr>
          <tr>
            <td className={Styles.fontSmall}><strong>標 準</strong></td>
            <td nowrap="nowrap" className={Styles.fontSmall}>ジアゼパム</td>
            <td className={Styles.fontSmall}>セルシン、ホリゾン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>20-100 <br />[36-200]</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5</td>
          </tr>
          <tr>
            <td colspan="1" rowspan="17"><strong>抗 不 安 剤</strong></td>
            <td nowrap="nowrap" className={Styles.fontSmall}>アルプラゾラム</td>
            <td className={Styles.fontSmall}>ソラナックス､コンスタン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>6-12</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.25</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.8</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>エチゾラム</td>
            <td className={Styles.fontSmall}>デパス、エチゾラム</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>6</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1.5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>オキサゾラム</td>
            <td className={Styles.fontSmall}>セレナール</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>24</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>20</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>クロキサゾラム</td>
            <td className={Styles.fontSmall}>セパゾン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>16</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1.5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>クロチアゼパム</td>
            <td className={Styles.fontSmall}>リーゼ、リルミン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>6</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>クロラゼプ酸</td>
            <td className={Styles.fontSmall}>メンドン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>[36-200]</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>7.5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>7.5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>クロルジアゼポキシド</td>
            <td className={Styles.fontSmall}>コントール、バランス</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5-30 <br />[36-200]</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>12.5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>タンドスピロン</td>
            <td className={Styles.fontSmall}>セディール</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1.1</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>25</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>トフィソパム</td>
            <td className={Styles.fontSmall}>グランダキシン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.8</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>125</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>フルジアゼパム</td>
            <td className={Styles.fontSmall}>エリスパン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>23</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>フルタゾラム</td>
            <td className={Styles.fontSmall}>コレミナール</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>3.5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>15</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>フルトプラゼパム</td>
            <td className={Styles.fontSmall}>レスタス</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>[190]</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1.67</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ブロマゼパム</td>
            <td className={Styles.fontSmall}>レキソタン、セニラン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10-20</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>2.5-3</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>2.5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>メキサゾラム</td>
            <td className={Styles.fontSmall}>メレックス</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>60-150</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1.67</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>メダゼパム</td>
            <td className={Styles.fontSmall}>レスミット</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>36-200</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ロフラゼプ酸</td>
            <td className={Styles.fontSmall}>メイラックス</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>122</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1.67</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ロラゼパム</td>
            <td className={Styles.fontSmall}>ワイパックス</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10-20</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1.2</td>
          </tr>
          <tr>
            <td colspan="1" rowspan="14" className={Styles.fontSmall}><strong>睡 眠 剤</strong></td>
            <td nowrap="nowrap" className={Styles.fontSmall}>エスゾピクロン</td>
            <td className={Styles.fontSmall}>ルネスタ</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>6 <br />(高齢者は9)</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1.5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>エスタゾラム</td>
            <td className={Styles.fontSmall}>ユーロジン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10-24</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.5-1</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>2</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>クアゼパム</td>
            <td className={Styles.fontSmall}>ドラール</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>25-100</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>15</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ゾピクロン</td>
            <td className={Styles.fontSmall}>アモバン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5-6</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>7.5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>7.5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ゾルピデム</td>
            <td className={Styles.fontSmall}>マイスリー</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>2</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>トリアゾラム</td>
            <td className={Styles.fontSmall}>ハルシオン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>2</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.25</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.25</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ニトラゼパム</td>
            <td className={Styles.fontSmall}>ベンザリン、ネルボン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>15-38</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ニメタゼパム</td>
            <td className={Styles.fontSmall}>エリミン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>21</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ハロキサゾラム</td>
            <td className={Styles.fontSmall}>ソメリン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>42～160</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>5</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>フルニトラゼパム</td>
            <td className={Styles.fontSmall}>ロヒプノール、サイレース</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>18-26 <br />[36-200]</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>フルラゼパム</td>
            <td className={Styles.fontSmall}>ダルメート、ベノジール</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>[40-250]</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>7.5-15</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>15</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ブロチゾラム</td>
            <td className={Styles.fontSmall}>レンドルミン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>7</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.25</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>リルマザホン</td>
            <td className={Styles.fontSmall}>リスミー</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10.5</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>&nbsp;</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>2</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>ロルメタゼパム</td>
            <td className={Styles.fontSmall}>エバミール、ロラメット</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10-20</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.5-1</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>1</td>
          </tr>
          <tr>
            <td rowspan="2"><strong>抗 痙 攣 剤</strong></td>
            <td nowrap="nowrap" className={Styles.fontSmall}>クロナゼパム</td>
            <td className={Styles.fontSmall}>リボトリール、ランドセン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>18-50</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.25</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>0.25</td>
          </tr>
          <tr>
            <td nowrap="nowrap" className={Styles.fontSmall}>クロバザム</td>
            <td className={Styles.fontSmall}>マイスタン</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>12-60</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10</td>
            <td nowrap="nowrap" className={Styles.fontSmall}>10</td>
          </tr>
        </tbody>
      </Table>
      ※ 出典：<a href="http://www.benzo-case-japan.com/benzodiazepines-japanese.php" target="_blank" rel="noopener noreferrer">Benzo Case Japan</a>    
      </Container>
    </Layout>
  )

  export default BenzoList
