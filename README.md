# Udemyを見ながらVue.csで作成したメモアプリ
https://my-address-pj-vue-tutrial.web.app/addresses

# Vue用語集

## マスタシュ/ひげ記法 
{{ var }}
htmlの地の文からデータにアクセスするときの書き方

## ディレクティブ(htmlタグの属性のような記法)

#### v-bind
title/classなどのhtmlタグ属性にdataを展開する。

#### computedプロパティ
バーチャルフィールド的なやつ。

#### v-on
イベントを設定する @の省略記法あり
pushメソッドを使用してページ遷移ができる

```
<v-btn @click="$router.push({ name: 'addresses' })">キャンセル</v-btn>
```

#### v-model
data()を仮装domの属性値に紐付ける
双方向バインディング

#### v-show
trueであれば表示。falseであれば非表示。
display:none;がついたり消えたり
頻繁に切り替えるときに使う

#### v-if
v-showと似てる。
domを実際に、消したりつけたり
ほとんど切り替わらないときに使う

#### v-for
繰り返し
:keyは一意なキーを指定する。効率的なレンダリングを実現するためのもの。


## コンポーネント関係
#### props
子コンポーネントに渡す引数
dataと違い、直接変更はできない。propsの属性は変更できる。

#### $emit
子コンポーネントから親にデータを渡す

#### sync修飾子
子=>親のデータ渡しを簡単に書ける
親コンポーネントのv-bindに付ける

## vuex
ストアで状態の管理を行う。Fluxという設計パターンに基づく。
色々なコンポーネントから共用するデータを格納する

#### Action
コンポーネントからデータを受けとり,Mutationに渡すなど。
componentからは、dispatchメソッドで呼び出される。
また、これはmapActionsを使うと簡単に書ける。(...mapActionsという書き方)

commitメソッドでMutationを呼び出す

#### Mutation
実際に Stateを変更する処理を記述(モデル的な)

#### State
データを格納。componentのdataと同じ役割
生データを受け取ることもできる
chrome拡張機能の[Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd/related?hl=en)を使用すると、デバッグ時にStateの状態を確認できて便利

#### Getter
データを加工して受け取ることができる
mapGettersをコンポーネントのcomputedに記載することで、コンポーネントのプロパティとしてmapできる。