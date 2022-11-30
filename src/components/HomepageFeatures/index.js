/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-11-29 16:16:38
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-11-30 16:42:49
 * @FilePath: \my-website\src\components\HomepageFeatures\index.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'React',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        React
      </>
    ),
  },
  {
    title: 'Electron',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Electron
      </>
    ),
  },
  {
    title: '小程序',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        小程序
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
