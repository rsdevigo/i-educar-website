/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const DocsBlock = require(process.cwd()+ '/core/DocsBlock.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const BlockHeader = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
    className={props.class}
    >
    <GridBlock className={props.classNameGrid} align="left" contents={props.children} layout={props.layout} />
  </Container>
);

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
    className={props.className}>
    <DocsBlock className={props.classNameGrid} align="left" contents={props.children} layout={props.layout} />
    <span className='docsText'>
      <p>Veja algo que precisa ser corrigido? Propor uma mudança na <a href="https://github.com/portabilis/i-educar/issues" >fonte</a></p>
      <p>Precisa de uma versão diferente dos documentos?<a> Veja as versões disponíveis.</a></p>
    </span>
  </Container>
);








class Docs extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <BlockHeader class="docsContainerHeader" classNameGrid="docsGridHeader">
        {[
          {
            title: 'Manual',
            content: 'Guias com foco no usuário final. É preciso criar um corpo organizado de documentos para consulta de professores, secretários de escola e administradores do i-educar. Importante ter guias distintos para cada tipo de usuário. Conteúdo dos guias pode conter webcasts.',
            textAlign: 'left',
          }
        ]}
        </BlockHeader>
        <Block layout='threeColumn' className='docsContainer' classNameGrid='docsGrid'>
        {[
          {
            content: 'É professor ou secretário de escola? Consulte o manual do i-Educar e saiba, passo a passo, como utilizar todas suas funções, aproveitando-o ao máximo.',
            image: imgUrl('funcionalidades/book.svg'),
            imageAlign: 'top',
            title: 'Usuário',
            link: docUrl("user-intro"),
          },
          {
            content: 'Um guia para tornar a gestão do i-Educar mais fácil e intuitiva.',
            image: imgUrl('funcionalidades/book.svg'),
            imageAlign: 'top',
            title: 'Administradores',
            link: docUrl("admin-intro"),
          },
          {
            content: ' Faça parte da comunidade do maior software aberto de gestão escolar do Brasil e ajude na democratização da tecnologia para a educação pública. Saiba como adotar, customizar e contribuir com o desenvolvimento do i-Educar.',
            image: imgUrl('funcionalidades/book.svg'),
            imageAlign: 'top',
            title: 'Desenvolvedores',
            link: docUrl("dev-intro"),
          }
        ]}
        </Block>
      </div>
    );
  }
}

module.exports = Docs;
