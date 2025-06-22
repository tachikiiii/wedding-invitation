"use client";
import { useState } from "react";
import Image from "next/image";

const sections = [
  { id: "greeting", label: "ご挨拶" },
  { id: "profile", label: "新郎新婦プロフィール" },
  { id: "community", label: "コミュニティ紹介" },
  { id: "datetime", label: "挙式・披露宴日時" },
  { id: "timeline", label: "タイムライン" },
  { id: "access", label: "会場アクセス" },
  { id: "qa", label: "Q&A" },
  { id: "notice", label: "持ち物・注意事項" },
  { id: "photo", label: "Google Photo共有" },
  { id: "rsvp", label: "出欠フォーム" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SIDEBAR_WIDTH = 256; // w-64 = 256px

  return (
    <div>
      <header>
        {/* <Image
          src="/top.jpg"
          alt="しげと＆立木"
          width={1365}
          height={300}
          className="w-full object-cover"
          style={{
            // カーブさせたいとき
            borderBottomLeftRadius: '0 0 100% 100% / 0 0 20% 20%',
            borderBottomRightRadius: '0 0 100% 100% / 0 0 20% 20%',
          }}
        /> */}
      </header>
      {/* ハンバーガーメニュー */}

      <button
        className="fixed top-8 z-50 px-3 py-2 border border-solid border-[#333] rounded shadow font-bold text-[10px] cursor-pointer transition-all duration-300"
        aria-label="メニューを開く"
        style={{
          right: open ? `${SIDEBAR_WIDTH + 32}px` : '32px', // 32px = right-8
          transition: 'right 0.3s cubic-bezier(.4,0,.2,1)', // スムーズな移動
        }}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex flex-col items-center justify-center mt-1">
          <span className="block w-4 h-0.25 bg-[#333] mb-1.5 rounded transition-all" />
          <span className="block w-4 h-0.25 bg-[#333] mb-1.5 rounded transition-all" />
          <span className="block w-4 h-0.25 bg-[#333] rounded transition-all" />
        </div>
        <span className="text-[#333]">MENU</span>
      </button>

      {/* メニュー（モバイルドロワー） */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-40
    ${open ? 'bg-black/70 pointer-events-auto' : 'bg-transparent pointer-events-none'}
    flex items-start justify-end transition-colors duration-300`}
        onClick={() => setOpen(false)}
      >
        <nav
          className={`
       w-64 h-full p-6
      transform transition-transform duration-300 ease-in-out
      ${open ? 'translate-x-0' : 'translate-x-full'}
    `}
          onClick={e => e.stopPropagation()}
        >

          <ul>
            {sections.map((s) => (
              <li className="mt-3" key={s.id}>
                <button
                  className="w-full text-left py-3 px-5 text-lg border-b 
                  border-[#F4C2C2] text-sm hover:bg-[#F4C2C2]
                  cursor-pointer bg-[#8A9A5B] rounded-full shake-on-hover"
                  onClick={() => handleNav(s.id)}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>


      {/* メインコンテンツ */}
      <main className="max-w-xl mx-auto px-4 py-6 space-y-12">

        <div className="relative w-[500px] h-80 mx-auto mt-20">
          {/* 一番下：背景用ドット画像 */}
          <img
            src="/bg_dot.png"
            alt="背景"
            className="absolute left-16 top-20 w-full h-full object-cover"
            style={{
              zIndex: -10, // 他より小さく
            }}
          />

          {/* 1枚目の影 */}
          <div
            className="absolute left-6 top-13 w-60 h-80"
            style={{
              background: "#8A9A5B",
              zIndex: 0,
              transform: "rotate(-7deg)",
            }}
          />

          {/* 1枚目の画像 */}
          <img
            src="/img02.jpg"
            alt="画像1"
            className="absolute left-2 top-10 w-60 h-80 object-cover"
            style={{
              zIndex: 1,
              transform: "rotate(-7deg)",
            }}
          />

          {/* 2枚目の影 */}
          <div
            className="absolute left-68 top-2 w-60 h-80"
            style={{
              background: "#8A9A5B",
              zIndex: 2,
              transform: "rotate(6deg)",
            }}
          />

          {/* 2枚目の画像 */}
          <img
            src="/img01.jpg"
            alt="画像2"
            className="absolute left-[250px] top-[-10px] w-60 h-80 object-cover"
            style={{
              zIndex: 3,
              transform: "rotate(6deg)",
            }}
          />
        </div>



        <section className="pt-30" id="greeting">

          <h1>ご挨拶</h1>
          <p>2025年2月 私たちは夫婦となりました</p>
          <p>つきましては ささやかですが ウエディングパーティーを</p>
          <p>日頃お世話になっておりますみなさまに私どもの門出をお見守りいただきたく 出席のご案内をお送りいたしました</p>

        </section>
        <section id="profile">
          <h2>新郎新婦プロフィール</h2>
          <p>おふたりの写真・自己紹介文など。</p>
        </section>
        <section id="community">
          <h2>コミュニティ紹介</h2>
          <p>招待したグループや仲間の紹介をここに。</p>
        </section>
        <section id="datetime">
          <h2>挙式・披露宴日時</h2>
          <p>日付・時間・タイムテーブルの案内。</p>
        </section>
        <section id="timeline">
          <h2>タイムライン</h2>
          <ul>
            <li>◯◯時：受付開始</li>
            <li>◯◯時：挙式</li>
            <li>◯◯時：披露宴</li>
            <li>◯◯時：二次会 など</li>
          </ul>
        </section>
        <section id="access">
          <h2>会場アクセス</h2>
          <p>住所、地図、最寄駅など。</p>
          <div style={{
            width: '100%',
            height: 200,
            background: '#eee',
            borderRadius: 8,
            textAlign: 'center',
            lineHeight: '200px'
          }}>
            [Googleマップ埋め込み]
          </div>
        </section>
        <section id="qa">
          <h2>Q&A</h2>
          <ul>
            <li>服装は？</li>
            <li>駐車場は？</li>
            <li>ご祝儀について など</li>
          </ul>
        </section>
        <section id="notice">
          <h2>持ち物・注意事項</h2>
          <ul>
            <li>ドレスコード</li>
            <li>持ち込みルール</li>
            <li>ギフト・その他案内</li>
          </ul>
        </section>
        <section id="photo">
          <h2>Google Photo共有</h2>
          <p>写真アルバムへのリンク・QRコードなど。</p>
        </section>
        <section id="rsvp">
          <h2>出欠フォーム</h2>
          <p>出席・欠席の回答はこちらから。</p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdNeb3z0NlrtgZgL42S-aC0y0yxukuhUB2Ke9udx0ufwG8TFA/viewform?embedded=true"
            style={{ width: '100%', minWidth: 0, maxWidth: '100%' }}
            height={498}
          >
            読み込んでいます…
          </iframe>
        </section>
      </main>
    </div>
  );
}
