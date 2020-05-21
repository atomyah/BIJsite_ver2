import React from "react"
//import { Link } from "gatsby"

import Layout from "../../components/layout"
//import Image from "../../components/image"
import SEO from "../../components/seo"

import { Container, Table } from 'react-bootstrap'
import Styles from './benzolisteng.module.css'

const BenzoListEng = () => (
  <Layout>
   <Container fluid="md">    
    <SEO title="" />
    <SEO title="Benzodiazepines List and Equivalents"
        description="In Japan, 34 types of benzodiazepines can be prescribed, and if including generics, you will not know what you are taking." 
        image="/twitterimg/introduction-e1.png" 
        lang="en"
    />
    <h1 className={Styles.h1Size}>Benzodiazepines List and Equivalents</h1>
    <Table striped bordered hover size="sm" responsive>
      <tbody>
        <tr>
          <td>
          <span className={Styles.fontSmall}><b>Benzodiazepines</b></span>
          </td>
          <td>
          <span className={Styles.fontSmall}><b>Half-life (hrs)<sup>1</sup><br />
          [active metabolite]</b></span>
          </td>
          <td>
          <span className={Styles.fontSmall}><b>Market Aim<sup>2</sup></b></span>
          </td>
          <td>
          <span className={Styles.fontSmall}><b>Approximately Equivalent<br />
          Oral dosages (mg)<sup>3</sup></b></span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Alprazolam (Xanax, Solanax<b><sup>7</sup></b>, Constan<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>6-12</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>0.5</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Bromazepam (Lexotan, Lexomil)</span></td>
          <td>
          <span className={Styles.fontSmall}>10-20</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>5-6</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Brotizolam (Lendormin)</span></td>
          <td>
          <span className={Styles.fontSmall}>7</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>0.25</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Chlordiazepoxide (Librium)</span></td>
          <td>
          <span className={Styles.fontSmall}>5-30 [36-200]</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>25</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Clobazam (Frisium, Mystan)</span></td>
          <td>
          <span className={Styles.fontSmall}>12-60</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a,e</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>20</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Clonazepam (Klonopin, Rivotril<b><sup>7</sup></b>, Landsen<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>18-50</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a,e</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>0.5</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Clorazepate (Tranxene, Mendon<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>[36-200]</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>15</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Diazepam (Valium, Cercine<b><sup>7</sup></b>, Horizon<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>20-100 [36-200]</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>10</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Estazolam (ProSom, Eurodin<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>10-24</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>1-2</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Etizoram (depas)<span><sup><span className={Styles.fontRed}>5</span>,6</sup></span></span></td>
          <td>
          <span className={Styles.fontSmall}>6</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>1.5</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Ethyl loflazepate (Meilax)<span><sup><b>6</b></sup></span></span></td>
          <td>
          <span className={Styles.fontSmall}>122</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>1.67</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Flunitrazepam (Rohypnol, Silece<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>18-26 [36-200]</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>1</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Flurazepam (Dalmane, Dalmate)</span></td>
          <td>
          <span className={Styles.fontSmall}>[40-250]</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>15-30</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Halazepam (Paxipam)</span></td>
          <td>
          <span className={Styles.fontSmall}>[30-100]</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>20</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Ketazolam (Anxon)</span></td>
          <td>
          <span className={Styles.fontSmall}>30-100 [36-200]</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>15-30</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Loprazolam (Dormonoct)</span></td>
          <td>
          <span className={Styles.fontSmall}>6-12</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>1-2</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Lorazepam (Ativan, Wypax<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>10-20</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>1</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Lormetazepam (Noctamid,Evamir<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>10-12</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>1-2</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Medazepam (Nobrium, Resmit<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>36-200</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>10</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Nitrazepam (Mogadon, Benzalin<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>15-38</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>10</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Nordazepam (Nordaz, Calmday)</span></td>
          <td>
          <span className={Styles.fontSmall}>36-200</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>10</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Oxazepam (Serax, Serenid, Serepax, Serenal<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>4-15</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>20</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Prazepam (Centrax, Sedapran)</span></td>
          <td>
          <span className={Styles.fontSmall}>[36-200]</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>10-20</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Quazepam (Doral)</span></td>
          <td>
          <span className={Styles.fontSmall}>25-100</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>20</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Rilmazafone (Rhythmy)</span></td>
          <td>
          <span className={Styles.fontSmall}>10.5</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>2</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Temazepam (Restoril, Normison, Euhypnos)</span></td>
          <td>
          <span className={Styles.fontSmall}>8-22</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>20</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Tofisopam (GRANDAXIN<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>0.8</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>a</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>125</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Triazolam (Halcion)</span></td>
          <td>
          <span className={Styles.fontSmall}>2</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>0.5</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}><b>Anti-benzodiazepines with similar effects<sup>4</sup></b></span></td>
          <td>
          <span className={Styles.fontSmall}>&nbsp;</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>&nbsp;</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>&nbsp;</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Zaleplon (Sonata)</span></td>
          <td>
          <span className={Styles.fontSmall}>2</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>20</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Zolpidem (Ambien, Stilnoct, Myslee<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>2</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>20</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Zopiclone (Zimovane, Imovane, Amoban<b><sup>7</sup></b>)</span></td>
          <td>
          <span className={Styles.fontSmall}>5-6</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>15</span>
          </td>
        </tr>
        <tr>
          <td><span className={Styles.fontSmall}>Eszopiclone (Lunesta)</span></td>
          <td>
          <span className={Styles.fontSmall}>6 (9 in elderly)</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>h</span>
          </td>
          <td>
          <span className={Styles.fontSmall}>3</span>
          </td>
        </tr>
      </tbody>
    </Table>
    <br />
    <div>
      <ol>
        <li>
        <p>Half-life: time taken for blood concentration to fall to half its peak value after a single dose. Half-life of active metabolite shown in square brackets. This time may vary considerably between individuals.</p></li>
        <li>
        <p>Market aim: although all benzodiazepines have similar actions, they are usually marketed as anxiolytics (a), hypnotics (h) or anticonvulsants (e).</p></li>
        <li>
        <p>These equivalents do not agree with those used by some authors. They are firmly based on clinical experience but may vary between individuals.</p></li>
        <li>
        <p>These drugs are chemically different from benzodiazepines but have the same effects on the body and act by the same mechanisms.</p></li>
        <li>
        <p>This drug is thienotriazolodiazepine but have the same effects as benzodiazepines <span className={Styles.fontRed}>WITH HIGHEST MARKET SHARE IN JAPAN</span>.</p></li>
        <li>
        <p>Popular benzos specifically in Japan, not widely spread outside Japan.</p></li>
        <li>
        <p>The market name available in Japan only.</p></li>
      </ol>
      </div>
      Reference: <a href="http://www.benzo-case-japan.com/benzodiazepines-english.php" target="_blank" rel="noreferrer noopener">Benzo Case Japan</a> , and added Japan's popular benzos and market names ([5], [6], [7])
    </Container>
  </Layout>
)

export default BenzoListEng
