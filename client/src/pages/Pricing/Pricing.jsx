import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { Link } from 'react-router-dom';

import prices from './pricingList.json';
import styles from './Pricing.module.sass';

function Pricing () {
  return (
    <div>
      <Header />
      <div className={styles.namingPlatformListContainer}>
        <ul className={styles.namingPlatformList}>
          {prices.map(p => (
            <li>
              <article>
                <div
                  className={styles.namingPlatformArticle}
                  style={{ border: `10px solid ${p.color}` }}
                >
                  <h3 style={{ color: p.color }}>{p.type}</h3>
                  <p>{p.describeType}</p>
                  <p style={{ color: p.color }}>{p.price}</p>
                </div>
                <div>
                  {p.profit.map(profit => (
                    <p className={styles.body} data-tooltip={profit.tooltip}>
                      {profit.body}
                    </p>
                  ))}
                </div>
                <Link
                  to='/startContest'
                  style={{ backgroundColor: p.color }}
                  className={styles.btn}
                >
                  Start
                </Link>
              </article>
            </li>
          ))}
        </ul>
        ;
      </div>

      <Footer />
    </div>
  );
}

export default Pricing;
