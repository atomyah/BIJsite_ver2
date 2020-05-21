import React from "react"
import { Link　} from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Container, Card } from 'react-bootstrap'

import introductionImg from './images/introduction3.png'
import introductionEngImg from './images/introduction-e3.png'
import historyImg from './images/pict_valiumAd.png'
import wordsImg from './images/dict7.png'
import symptomsImg from './images/benzoberry.jpg'
import benzolistImg from './images/pict_benzolist.png'
import benzolistengImg from './images/pict_benzolisteng.png'

const BasicsPage = () => (

    <Layout>
        <Container fluid="md">
            <SEO title="ベンゾジアゼピン一般情報" />
            <h1 style={{ fontSize: '1.25rem'}}>ベンゾジアゼピン一般情報</h1>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <Card style={{  width: '18rem', fontSize: '0.9rem' }}>
                            <Card.Body>
                            <Link to="/introduction"><Card.Img variant="top" src={introductionImg} /></Link>
                                <Card.Title>ベンゾジアゼピン概要</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">2020-05-02</Card.Subtitle>
                                <Card.Text>
                                世界中で処方されている多くの睡眠薬・抗不安薬・筋弛緩薬が、ベンゾジアゼピンというおクスリです。ベンゾジアゼピン系薬剤は、英国、豪州、デンマークで処方が規制され、その他先進国でも麻薬と…
                                </Card.Text>
                                <Link to="/introduction">続きを読む</Link>
                            </Card.Body>
                        </Card>

                        <Card style={{  width: '18rem', fontSize: '0.9rem' }}>
                            <Card.Body>
                            <Link to="/introductioneng"><Card.Img variant="top" src={introductionEngImg} /></Link>
                                <Card.Title>summary of benzodiazepine</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">2020-05-02</Card.Subtitle>
                                <Card.Text>
                                Most of sleeping pills, anxiolytics and muscle relaxants prescribed around the world are benzodiazepines. There are guidelines that benzodiazepines have severe physical dependence and its prescription should not exceed 2 to 4 weeks, and some medications have ....
                                </Card.Text>
                                <Link to="/introductioneng">Read more</Link>
                            </Card.Body>
                        </Card>

                        <Card style={{  width: '18rem', fontSize: '0.9rem' }}>
                            <Card.Body>
                            <Link to="/basics/benzohistory"><Card.Img variant="top" src={historyImg} /></Link>
                                <Card.Title>ベンゾジアゼピンの歴史</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">2020-05-02</Card.Subtitle>
                                <Card.Text>
                                ベンゾジアゼピン系薬は製薬業界でトップクラスの売上を誇る処方薬です。 米国だけでベンゾジアゼピン処方箋は年間9400万件でありこれは約3人にひとりが処方されている ...
                                </Card.Text>
                                <Link to="/basics/benzohistory">続きを読む</Link>
                            </Card.Body>
                        </Card>

                        <Card style={{  width: '18rem', fontSize: '0.9rem' }}>
                            <Card.Body>
                            <Link to="/basics/benzowords"><Card.Img variant="top" src={wordsImg} /></Link>
                                <Card.Title>ベンゾジアゼピン用語集</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">2020-05-02</Card.Subtitle>
                                <Card.Text>
                                ベンゾジアゼピン系薬はGABA受容体のサブユニットα1とγに作用します。 従って催眠作用、抗不安作用、そして筋弛緩作用が期待できます。いっぽうで非ベンゾ（非ベンゾジアゼピン系薬。英語でもanti-benzodiazepineと言います）…
                                </Card.Text>
                                <Link to="/basics/benzowords">続きを読む</Link>
                            </Card.Body>
                        </Card>
                        <Card style={{  width: '18rem', fontSize: '0.9rem' }}>
                            <Card.Body>
                            <Link to="/basics/withdrawalsymptoms"><Card.Img variant="top" src={symptomsImg} /></Link>
                                <Card.Title>ベンゾジアゼピン離脱症状一覧（Withdrawal symptoms）</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">2020-05-02</Card.Subtitle>
                                <Card.Text>
                                ベンゾジアゼピン離脱症状一覧になります。ひとによりどの症状を発症するかは異なります。上の写真は「ベンゾベリー」と呼ばれるベンゾ離脱症状特有の腹部膨満症状です ... English BWS name described too this page
                                </Card.Text>
                                <Link to="/basics/withdrawalsymptoms">続きを読む</Link>
                            </Card.Body>
                        </Card>
                        <Card style={{  width: '18rem', fontSize: '0.9rem' }}>
                            <Card.Body>
                            <Link to="/basics/benzolist"><Card.Img variant="top" src={benzolistImg} /></Link>
                                <Card.Title>ジアゼパム換算表</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">2020-05-02</Card.Subtitle>
                                <Card.Text>
                                日本では34種類のベンゾジアゼピン系薬剤が処方可能となっている（米国では5種類）。 そのため自分がベンゾを飲んでいるのかわかりにくい場合が多いと思います。 自分に常用薬があったら要チェックです　…
                                </Card.Text>
                                <Link to="/basics/benzolist">続きを読む</Link>
                            </Card.Body>
                        </Card>
                        <Card style={{  width: '18rem', fontSize: '0.9rem' }}>
                            <Card.Body>
                            <Link to="/basics/benzolisteng"><Card.Img variant="top" src={benzolistengImg} /></Link>
                                <Card.Title>Benzodiazepines List and Equivalents</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">2020-05-02</Card.Subtitle>
                                <Card.Text>
                                In Japan, 34 types of benzodiazepines can be prescribed, and if including generics, you will not know what you are taking. (In US only four types, Euro may have 4 -10 types). Please check this page!
                                </Card.Text>
                                <Link to="/basics/benzolisteng">続きを読む</Link>
                            </Card.Body>
                        </Card>
                </div>

        </Container>
    </Layout>
)

export default BasicsPage