import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
//import Image from "../../components/image"
import ValiumAd from "../../images/ValiumAd-benzohistory.jpg"
import SEO from "../../components/seo"

import { Container, Media } from 'react-bootstrap'
import Style from './benzohistory.module.css'

const BenzoHistory = () => (
    <Layout>
      <Container fluid="md">
        <SEO title="ベンゾジアゼピンの歴史"
        description="1990年米国精神医学会は、ベンゾジアゼピン処方の危険性を調査するためのタスクフォースを立ち上げました。 その調査は、ベンゾジアゼピン薬物を服用している人の80％が退薬により離脱症状を経験することをつきとめました" 
        image="/twitterimg/valiumAd.png" 
        lang="ja"
        />
        <h1 className={Style.h1Size}>ベンゾジアゼピンの歴史</h1>
        原文：<a href="http://benzoinfo.com/2017/12/13/a-brief-history-of-benzodiazepines/" target="_blank" rel="noopener noreferrer">
        A BRIEF HISTORY OF BENZODIAZEPINES
        </a>
        <p></p>
        <p>ベンゾジアゼピン系薬は、製薬業界でトップクラスの売上を誇る処方薬です。 Xanaxとしても知られているアルプラゾラム（<span className={Style.fontBrown}>訳注：ソラナックスのこと）</span>は、業界で最も売れている錠剤のひとつです。<span className={Style.fontCrimson}>米国だけで、現在ベンゾジアゼピンの処方箋は9400万件</span>であり、これは<span className={Style.fontCrimson}>約3人にひとり</span>が処方されていることになります。<span className={Style.fontBrown}>（訳注：具体的な統計内容は不明）</span></p>
        これは一晩で起こったわけではありません。
		<br />
        Xanax（アルプラゾラム）、Ativan（ロラゼパム）、Klonopin（クロナゼパム）などの現代のベンゾジアゼピン類の話は、約1世紀前、ドイツで始まりました。ドイツは最初の精神安定剤であるバルビツール酸塩を開発した国です。

        ドイツの製薬会社は、セカノール、ルミナール、ナンブトールといった様々な名前でバルビツール系安定剤を販売していました。        そしてその人気は1930年代の大恐慌時代に米国に飛び火し、店頭で爆発的に売れまくり、脳の活動と中枢神経系を抑えることで何百万人ものアメリカ人を“落ち着かせる”ことに役立ったのです。

        しかし、これらの薬の使用に関わる安全性は製薬メーカーが配布するプロモーション資料に基づいていました。しかし事実は実際とても複雑で、たしかにバルビツール系安定剤は多くの人々の安眠に役立ったのですが耐性と依存をもたらし、オーバードーズにつながるリスクも高く、薬剤からの離脱は拷問となり時には致命的でした。
		<br />
        <br />
        <span className={Style.fontBlue}>1951年</span>、議会は、バルビツール剤の購入に医師の処方箋を必要とする法律を可決しました。そして店頭販売は縮小していくのですが、製薬メーカーは獰猛に次世代トランキライザーの開発に乗り出していたのです。
		<br />
        <br />
        <span className={Style.fontBlue}>1955年</span>、スイスの製薬会社ロッシュの化学者<span className={Style.fontBrown}>（訳注：レオ・スターンバック）</span>が最初のベンゾジアゼピンの合成に成功。同社はそれを製品名リブリウムとし、1960年に市場を席巻しました。

        この新薬はバルビツール酸と同様の神経伝達物質に作用し同様の作用をしました。中枢神経系を抑圧して安寧感をもたらしてくれるのです。案の定製薬メーカーはバルビツレートとまったく同じ宣伝資料を作成し、この新薬は現代医学において安全なブレークスルーとしてマーケティングされたのです。

        しかし時間が経つにつれリブリウムとその類似のベンゾジアゼピン薬はやはり耐性と依存性、さらに新しい副作用をもつことが明らかになりました。
		<br />
        <br />
        <span className={Style.fontBlue}>1958年</span>にもうひとつ、ロッシュ社はジアゼパムと呼ばれるベンゾジアゼピンを特許出願し、それはValium（バリウム）という製品名で世界中に流通しました<span className={Style.fontBrown}>（訳注：日本ではセルシンとして武田薬品が販売）</span>。
		<Media>
            <img width={300}
                 className="mr-3"
                 src={ValiumAd}
                 alt="バリウム（ジアゼパム）広告"
            />
            <Media.Body>
                <h5 className={Style.fontBlue}>ロッシュ社によるバリウム（ジアゼパム）の広告</h5>
                <p><span className={Style.fontBrown}>訳注：<a href="https://youtu.be/OusADDs_3ps" target="_blank" rel="noopener noreferrer">Mother's little helper</a>というタイトルでローリングストーンズの曲にも出てくる。
                <br />
                "Mother needs something today to calm her down
                <br />
                And through she's not really ill
                <br />
                There's a little yellow pill
                <br />
                She goes running for the shelter of a mother's little help"
                <br />
                “今日もママはアレが必要
                <br />
                病気でもないのに
                <br />
                ちいさな黄色の錠剤
                <br />
                mother's little help ママの駆け込み寺”
                </span></p>
            </Media.Body>
        </Media>
        <br />
        さあ、毎度おなじみのイタチごっこです。
		<br />
        製薬メーカーによる安全性マーケティングとは裏腹に、依存や離脱の困難性が徐々にジアゼパムの社会的評判をおとしめていきました。

        そして製薬メーカーはまたまた獰猛に次々世代トランキライザーの開発に乗り出していくわけです。

        <span className={Style.fontBlue}>1975年</span>にロッシュはクロナゼパム<span className={Style.fontBrown}>（訳注： 商品名クロノピン。日本ではリボトリール、ランドセン）</span> の販売を開始。 
		2年後、Wyeth Pharmaceuticalsはロラゼパム<span className={Style.fontBrown}>(訳注：</span><span className={Style.fontBrown}>商品名Ativan。</span><span className={Style.fontBrown}>日本では1978年ワイパックスとして武田薬品が販売</span>）を発売しました。
		<br />
        <br />
        両剤ともより安全で、より少ない投薬量で済むとし、したがって低リスクであるとして悪評高かったジアゼパムとは「異なる」次々世代ベンゾジアゼピンとして医師および市場に販売されました。

        そのマーケティングは巧妙で、製薬メーカーは「トランキライザー」という名前を完全に隠し新しい用語<span className="fontBrown">「<strong>抗不安薬</strong>」</span><span className={Style.fontBrown}>（訳注：anxiolytic）</span>を作り出し強調しました。実際は同じベンゾジアゼピン系薬剤です。

        そして一方で「低用量で済む」というマーケティングによってすっかり隠された事実がありました。新薬の<span className={Style.fontCrimson}><strong>最強ともいえる力価</strong></span>です。
		結局、クロナゼパム（クロノピン）とアルプラゾラム（ザナックス）の1ミリグラムは、約20ミリグラムのバリウムに等しいわけです。
		<br />
        <br />
        <span className={Style.fontBlue}>1979年</span>マサチューセッツのテッド・ケネディ上院議員は、ベンゾジアゼピン類の危険性について上院議員の聴聞会を行いました。しかし皮肉にもValium（ジアゼパム）の悪評により審問は失敗してしまうのです。
	
        ジアゼパムを規制を作るよりも、すっかりヒールとなったジアゼパム――恐ろしいトランキライザー――を市場から締め出すニューヒーロー新薬ベンゾたち（クロナゼパム、アルプラゾラム、ロラゼパム）の物語に聴聞会は支配されてしまったのです。

        <span className={Style.fontBrown}>（訳注： この頃から日本で販売されるベンゾジアゼピンが増えていく。リーゼ（田辺三菱）、ユーロジン（武田）、リボトリール（日本ロシュ）、ランドセン（住友）、デパス（田辺三菱）、ロヒプノール（日本ロシュ）、サイレース（エーザイ）、コンスタン（武田））</span>

        しかし真実は、製薬業界がそれをどう呼ぼうが、クロナゼパムとアルプラゾラムの分子構造をいかに微調整しようが、ベンゾジアゼピン薬物全体が同じように危険であるということです。
		<br />
        しかもさらに凶悪になって！
		<br />
        <br />
        ベンゾジアゼピンのリブランド作戦は米国以外ではあまり成功しませんでした。1980年代を通じて、多くの先進国がすべてのベンゾジアゼピンの非緊急時の使用と処方を厳しく規制するようになったため、米国は孤立していきました。

        たとえば英国では過去最大規模1万4千人の製薬メーカーを相手取った集団訴訟をきっかけに、ベンゾジアゼピンを規制する法律が議会を通過しました。

        結局英国の集団訴訟は資金がつき頓挫しましたが、英国では以後ベンゾジアゼピンは危険であるとして、英国医師会はベンゾジアゼピンの改革と意識向上のための重要な味方でありつづけています。
		<br />
        <br />
        <span className={Style.fontBlue}>1990年</span>に、米国精神医学会は、ベンゾジアゼピン処方の危険性を調査するためのタスクフォースを立ち上げました。

        その調査は、<span className={Style.fontCrimson}>ベンゾジアゼピン薬物を服用している人の80％が退薬により離脱症状を経験する</span>ことをつきとめました。

        ベンゾジアゼピン離脱症状の専門家であるヘザーアシュトン博士は、<span className={Style.fontCrimson}>服用者の6人にひとりが重症遷延性離脱症候群に陥る</span>と見積もっています。

        しかし、米国精神医学会の調査やアシュトン博士ら専門家からの警告は、1990年代のベンゾジアゼピン処方の急増にはほとんど影響を及ぼすことができませんでした。依存症や障害の症例が増える一方で、ベンゾジアゼピンの依存と退薬症状に関する文献はほとんど残らなかったのです。

        そして一方、この時期にベンゾジアゼピンとほぼ同じ方法で脳に作用するいわゆる「Z薬」の商業的導入と大量の普及が見られました。
		<br />
        <br />
        <span className={Style.fontBlue}>2002年</span>、ヘザー・アシュトン博士は同僚と患者達の協力のもとで培われた、ベンゾジアゼピンの退薬およびテーパリングのための詳細なガイドラインのオンライン版を公開しました。そのガイドは、ベンゾジアゼピン離脱診療所を数十年運営してきた経験に基づいて、すぐにアシュトンマニュアルとして名を馳せました。アシュトンマニュアルは世界中の医療従事者にとって信頼できる情報源でありつづけており、ベンゾジアゼピンによる障害および離脱に関する医学および科学文献の一般的な不足を埋めるものとなっています。
		<br />
        <br />
        <span className={Style.fontBlue}>2008年</span>までに、米国の20人に1人以上の成人が、少なくとも1つのベンゾジアゼピン処方箋を得ていました。

        2年後、2010年に退役軍人保健局は、ベンゾジアゼピンをPTSDの治療薬として使用しないことを推奨します。
		<br />
        <br />
        <span className={Style.fontBlue}>2015年</span>に、英国医学協会は、ベンゾジアゼピンおよびZ薬を含む4つのカテゴリーの薬物によって引き起こされる依存および離脱の危険性を強調する主要な報告書を発表し、<span className={Style.fontBlue}>2016年</span>にはついに、ベンゾジアゼピンの危険性について米国の２つの州と連邦機関から警告が出されました。

        ニューヨーク州衛生衛生局とペンシルベニア州は、数週間以下の使用を推奨する「処方ガイドライン」を発行。同時にFDAはベンゾジアゼピンとオピオイド併用に対するブラックボックス警告を発表。
		<br />
        <br />
        しかし今日、それでもベンゾジアゼピン処方数もさらに増加し続けています。ベンゾジアゼピン離脱コミュニティの規模もどんどん大きくなっています。
	
        ベンゾジアゼピンの危険性に関する上院審問の約40年後、ベンゾジアゼピン薬物に関する研究や医師の知識は悲劇的に不十分なままです。
		<br />
        <br />
        一刻も早く、緊急な対応・行動が必要となっている状況です。
        <div style={{marginTop: 40}}></div>
        <p className={Style.fontBrown}>（翻訳＆注釈：<Link to="patients-article/8" target="blank" rel="noreferrer noopener">ベンゾジアゼピン情報センター　管理人</Link>）</p>
        
        
      </Container>
    </Layout>

)

export default BenzoHistory