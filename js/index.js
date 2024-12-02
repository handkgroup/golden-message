const homeFeature = [
    {
      id: 1,
      title: "学生の利用頻度の多さ",
      text: "UNI MEETのコンセプトは「学生生活を充実させる相棒のような存在になる」です。学生は単に就活のために利用するのではなく、大学生活やキャリアにおける様々な情報収集や、学生同士の繋がりを広げるためなど、多種多様な目的で、プラットフォームを利用しています。従って、一般的な就活サイトに比べ、圧倒的な利用頻度の多さ・利用時間の長さであることから、高いアクティブ率を維持できています。そのことから、企業様の採用においても、応募率やメッセージの返信率の高さにご好評いただいています。",
      img: "../assets/img/feature_img.png",
    },
    {
      id: 2,
      title: "全国、全学年が利用",
      text: "UNI MEETは、就活の本格スタートに合わせて利用を開始するサービスではありません。学生であれば誰でも利用できるのが特徴です。従って、大学1年生～4年生まで、幅広くご利用いただいています。企業様においても、目的に合わせて、長期インターンシップへの集客、採用の母集団形成など、あらゆる用途でご利用いただけます。",
      img: "../assets/img/feature_img.png",
    },
    {
      id: 3,
      title: "仕事意欲の高い学生",
      text: "UNI MEETは、サービスコンセプトに共感を得た学生が多いことから、「成長したい」「人脈を広げたい」「社会について学びたい」といった、将来のキャリアに対する視座や、仕事への意欲が高い人材が多く集まっています。そのため、どうせ費用をかけるなら、良い人材・活躍が期待できる人材を採用したい！という企業様のご要望にお応えできます。			",
      img: "../assets/img/feature_img.png",
    },
  ],
  cards_container = document.querySelector(".cards");

function featureCardList(data) {
  let result = ``;
  data.forEach((item) => {
    result += `
      <div class="card">
            <div class="img">
              <p class="pattern">0${item.id}</p>
              <img src="${item.img}" alt="aa" />
            </div>
            <div class="text_wrapper">
              <h2>${item.title}</h2>
              <p>
  ${item.text}
              </p>
            </div>
          </div>
    `;
  });
  cards_container.innerHTML = result;
}

featureCardList(homeFeature);
