"use client";
import ReactDataTable from "@/app/components/core/ReactDataTable";
import BarChartBlock from "./components/core/bar-chart-block/BarChartBlock";
import { FollowNoFollow } from "./components/core/follow-nofollow/FollowNoFollow";
import { InfoItem } from "./components/core/info-item/InfoItem";
import { KeywordTable } from "./components/core/keyword-table/KeywordTable";
import { LinkType } from "./components/core/link-type/LinkType";
import { MostVisited } from "./components/core/most-visited/MostVisited";
import { PotentialTable } from "./components/core/potential-table/PotentialTable";
import "./page.scss";

const BarCHartData = [
  { id: "1-3", value: 8 },
  { id: "4-10", value: 12 },
  { id: "11-20", value: 18 },
  { id: "21-50", value: 38 },
  { id: "50-100", value: 48 },
];
const MostVisitedData = [
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
  { address: "sdfkgjh", percent: 10 },
];
const KeywordTableData = [
  {
    keyword: "keyword",
    change: 431,
    change_amount: 431,
    impression: 431,
    serp_features: 431,
    keyword_dificulty: 9,
  },
  {
    keyword: "keyword2",
    change: 41,
    change_amount: 4131,
    impression: 31,
    serp_features: 41,
    keyword_dificulty: 1,
  },
  {
    keyword: "keyword",
    change: 431,
    change_amount: -431,
    impression: 431,
    serp_features: 431,
    keyword_dificulty: 9,
  },
  {
    keyword: "keyword2",
    change: 41,
    change_amount: -31,
    impression: 31,
    serp_features: 41,
    keyword_dificulty: 1,
  },
  {
    keyword: "keyword",
    change: 431,
    change_amount: 431,
    impression: 431,
    serp_features: 431,
    keyword_dificulty: 9,
  },
  {
    keyword: "keyword2",
    change: 41,
    change_amount: -131,
    impression: 31,
    serp_features: 41,
    keyword_dificulty: 1,
  },
  {
    keyword: "keyword",
    change: 431,
    change_amount: 431,
    impression: 431,
    serp_features: 431,
    keyword_dificulty: 9,
  },
  {
    keyword: "keyword2",
    change: 41,
    change_amount: 4131,
    impression: 31,
    serp_features: 41,
    keyword_dificulty: 1,
  },
];
const InfoData = [
  { heading: "Keyword Coverage Score", progress: 7 },
  { heading: "Semantic Similarity Score", progress: 35 },
  { heading: "Lexical Richness", progress: 25 },
  { heading: "Readability Score", progress: 25 },
];
const potentialProps = {
  heading: "پر پتانسیل ترین کیورد های ریاضی هفتم",
  data: [
    {
      keyword: "کیورد تستی",
      imp50: 595,
      imp90: 999,
      imp90Percent: 100,
    },
    {
      keyword: "کیورد تستی",
      imp50: 595,
      imp90: 999,
      imp90Percent: 100,
    },
    {
      keyword: "کیورد تستی",
      imp50: 999,
      imp90: 555,
      imp90Percent: -50,
    },
    {
      keyword: "کیورد تستی",
      imp50: 999,
      imp90: 555,
      imp90Percent: -50,
    },
    {
      keyword: "کیورد تستی",
      imp50: 999,
      imp90: 555,
      imp90Percent: -50,
    },
  ],
};
export default function Home() {
  return (
    <div className={`font-vazir`}>
      <ReactDataTable
        title={"محاسبه نرخ کلیک CTR"}
        data={items}
        columns={columns}
        autoWidth={true}
        paging={true}
        pageLength={10}
        lengthMenu={[10, 25, 50, 100]}
        order={[[1, "desc"]]}
        language={languages}
      />
      <div className="home__blocks-container container-fluid mt-4">
        <div className="row">
          <div className="col pl-0 mb-3">
            <div className="p-3 border bg-light">
              <BarChartBlock data={BarCHartData} />
            </div>
          </div>
          <div className="col pr-0 mb-3">
            <div className="p-3 border bg-light">
              <MostVisited data={MostVisitedData} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col pl-0 mb-3">
            <div className="p-3 border bg-light">
              <LinkType form={32.5} frame={65.6} picture={65.5} text={24} />
            </div>
          </div>
          <div className="col pr-0 mb-3">
            <div className="p-3 border bg-light">
              <FollowNoFollow follow={142344} noFollow={14234} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col p-0 mb-3">
            <div className="p-3 border bg-light">
              <KeywordTable data={KeywordTableData} />
            </div>
          </div>
        </div>

        <div className="row">
          {InfoData.map((info, i) => (
            <div className="col mb-3" key={i}>
              <div className="p-3 border bg-light">
                <InfoItem heading={info.heading} progresss={info.progress} />
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col pl-0 mb-3">
            <div className="p-3 border bg-light">
              <PotentialTable {...potentialProps} />
            </div>
          </div>
          <div className="col pr-0 mb-3">
            <div className="p-3 border bg-light">
              <PotentialTable {...potentialProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const languages = {
  lengthMenu: "نمایش _MENU_ رکورد در هر صفحه",
  zeroRecords: "رکوردی یافت نشد",
  info: "نمایش صفحه _PAGE_ از _PAGES_",
  infoEmpty: "رکوردی موجود نیست",
  infoFiltered: "(فیلتر شده از _MAX_ رکورد)",
  search: "جستجو:",
  paginate: {
    first: "اول",
    last: "آخر",
    next: "بعدی",
    previous: "قبلی",
  },
};

const columns = [
  { data: "page", title: "صفحه" },
  { data: "impressions", title: "بازدیدها" },
  { data: "clicks", title: "کلیک ها" },
  { data: "ctr", title: "CTR" },
  { data: "position", title: "موقعیت" },
];

const items = [
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-انشا-ششم",
    impressions: 833123,
    clicks: 90725,
    ctr: 0.1088974857,
    position: 4.0275313489,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-قران-هفتم",
    impressions: 781002,
    clicks: 99888,
    ctr: 0.1278972397,
    position: 3.9782881478,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-قران-نهم",
    impressions: 703526,
    clicks: 21333,
    ctr: 0.0303229731,
    position: 6.5746468503,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-املا-ششم",
    impressions: 641257,
    clicks: 84673,
    ctr: 0.1320422233,
    position: 4.7188022899,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-قران-هشتم",
    impressions: 584176,
    clicks: 32226,
    ctr: 0.0551648818,
    position: 4.7908661088,
  },
  {
    page: "https://hamkelasi.ir/blog/معدل-لازم-برای-انتخاب-رشته-تجربی-در-پایه-نهم-به-دهم",
    impressions: 572492,
    clicks: 25986,
    ctr: 0.0453910273,
    position: 6.0924641742,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوالات-علوم-ششم",
    impressions: 474719,
    clicks: 10659,
    ctr: 0.0224532829,
    position: 7.9526288183,
  },
  {
    page: "https://hamkelasi.ir/article/امتحان-انشا-هفتم",
    impressions: 460351,
    clicks: 43481,
    ctr: 0.0944518422,
    position: 4.5983130264,
  },
  {
    page: "https://hamkelasi.ir/blog/معدل-لازم-برای-انتخاب-رشته-انسانی",
    impressions: 450090,
    clicks: 35380,
    ctr: 0.0786065009,
    position: 6.1039769824,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-فیزیک-یازدهم-تجربی-فصل-سوم-به-همراه-حل-تمرین-ها",
    impressions: 449003,
    clicks: 33190,
    ctr: 0.0739193279,
    position: 4.6758507181,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-نگارش-سوم-ابتدایی",
    impressions: 428699,
    clicks: 23601,
    ctr: 0.0550526127,
    position: 3.0455494414,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-دینی-دهم",
    impressions: 427628,
    clicks: 9511,
    ctr: 0.0222412938,
    position: 7.1139682154,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوالات-هدیه-ششم",
    impressions: 402379,
    clicks: 7581,
    ctr: 0.0188404464,
    position: 7.3257078525,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-انشا-نهم",
    impressions: 391829,
    clicks: 35782,
    ctr: 0.0913204485,
    position: 4.6215670611,
  },
  {
    page: "https://hamkelasi.ir/article/oloom8-n2",
    impressions: 385072,
    clicks: 49337,
    ctr: 0.1281240911,
    position: 4.9023974737,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوالات-اجتماعی-ششم",
    impressions: 380959,
    clicks: 15909,
    ctr: 0.0417603994,
    position: 7.4069834287,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-زبان-دهم",
    impressions: 380059,
    clicks: 18219,
    ctr: 0.0479372939,
    position: 5.8788609137,
  },
  {
    page: "https://hamkelasi.ir/article/امتحان-املا-هفتم",
    impressions: 363277,
    clicks: 26869,
    ctr: 0.0739628438,
    position: 3.8477855741,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-آمادگی-دفاعی-نهم",
    impressions: 361214,
    clicks: 9778,
    ctr: 0.0270698256,
    position: 6.8291040768,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-دینی-یازدهم",
    impressions: 357893,
    clicks: 11292,
    ctr: 0.0315513296,
    position: 6.6426948837,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-املا-نهم",
    impressions: 352358,
    clicks: 21515,
    ctr: 0.0610600582,
    position: 4.0256614012,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-فارسی-ششم",
    impressions: 350026,
    clicks: 18319,
    ctr: 0.0523361122,
    position: 6.6100489678,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-ریاضی-پنجم",
    impressions: 338890,
    clicks: 10764,
    ctr: 0.0317625188,
    position: 6.9348136563,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-جغرافیا-دهم",
    impressions: 320386,
    clicks: 14631,
    ctr: 0.0456667894,
    position: 5.8903198017,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-فارسی-دهم",
    impressions: 311770,
    clicks: 4575,
    ctr: 0.0146742791,
    position: 6.711880553,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-فیزیک-یازدهم-تجربی-فصل-دوم-به-همراه-حل-تمرین-ها",
    impressions: 309170,
    clicks: 17551,
    ctr: 0.0567681211,
    position: 4.9169356665,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-عربی-دهم",
    impressions: 303378,
    clicks: 5436,
    ctr: 0.0179182406,
    position: 6.9941063624,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-ریاضی-اول-دبستان",
    impressions: 295740,
    clicks: 11219,
    ctr: 0.0379353486,
    position: 5.2539460337,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-نگارش-دوم-ابتدایی",
    impressions: 294264,
    clicks: 10120,
    ctr: 0.0343908871,
    position: 2.1495833673,
  },
  {
    page: "https://hamkelasi.ir/article/farsi9-n2",
    impressions: 291565,
    clicks: 16731,
    ctr: 0.0573834308,
    position: 6.8229485706,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوالات-فارسی-پنجم",
    impressions: 279928,
    clicks: 17353,
    ctr: 0.0619909405,
    position: 5.2085179046,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-ریاضی-سوم-ابتدایی",
    impressions: 275324,
    clicks: 8398,
    ctr: 0.0305022446,
    position: 6.8023383359,
  },
  {
    page: "https://hamkelasi.ir/article/امتحان-املا-هشتم",
    impressions: 275110,
    clicks: 31466,
    ctr: 0.1143760678,
    position: 3.2998836829,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-تفکر-هشتم",
    impressions: 273561,
    clicks: 25044,
    ctr: 0.0915481373,
    position: 4.1799013748,
  },
  {
    page: "https://hamkelasi.ir/article/موضوع-انشا-هشتم",
    impressions: 260810,
    clicks: 33074,
    ctr: 0.1268126222,
    position: 3.6408649975,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-ریاضی-دوم-دبستان",
    impressions: 258333,
    clicks: 6429,
    ctr: 0.0248864837,
    position: 7.0372232738,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-انسان-و-محیط-زیست-یازدهم",
    impressions: 253203,
    clicks: 10556,
    ctr: 0.0416898694,
    position: 5.8990296324,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-فارسی-یازدهم",
    impressions: 240038,
    clicks: 4453,
    ctr: 0.0185512294,
    position: 5.9493080262,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-تفکر-هفتم",
    impressions: 239944,
    clicks: 15605,
    ctr: 0.0650360084,
    position: 5.8539867636,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-علوم-و-فنون-دهم",
    impressions: 225483,
    clicks: 10747,
    ctr: 0.0476621297,
    position: 5.1150463671,
  },
  {
    page: "https://hamkelasi.ir/article/motaleat9-n2",
    impressions: 217317,
    clicks: 13182,
    ctr: 0.0606579329,
    position: 6.7924966754,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-نگارش-دهم",
    impressions: 216324,
    clicks: 10868,
    ctr: 0.0502394556,
    position: 3.9029511289,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-فیزیک-یازدهم-تجربی-فصل-اول",
    impressions: 213764,
    clicks: 7386,
    ctr: 0.0345521229,
    position: 4.9119917292,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-فیزیک-یازدهم",
    impressions: 211205,
    clicks: 39752,
    ctr: 0.1882152411,
    position: 4.9220425653,
  },
  {
    page: "https://hamkelasi.ir/article/arabi9-n2",
    impressions: 205952,
    clicks: 16078,
    ctr: 0.078066734,
    position: 6.4805877098,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-دینی-دهم-انسانی",
    impressions: 204657,
    clicks: 7330,
    ctr: 0.0358160239,
    position: 5.930170969,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-ریاضی-ششم",
    impressions: 204634,
    clicks: 4595,
    ctr: 0.022454724,
    position: 10.6149271382,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-تاریخ-معاصر-یازدهم",
    impressions: 197370,
    clicks: 8772,
    ctr: 0.0444444444,
    position: 5.7698991741,
  },
  {
    page: "https://hamkelasi.ir/article/payam9-n2",
    impressions: 193263,
    clicks: 19545,
    ctr: 0.1011316186,
    position: 5.9025317831,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-فارسی-چهارم-دبستان",
    impressions: 187953,
    clicks: 5979,
    ctr: 0.0318111443,
    position: 6.958218278,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-دینی-یازدهم-انسانی",
    impressions: 186717,
    clicks: 5968,
    ctr: 0.03196281,
    position: 6.0434132939,
  },
  {
    page: "https://hamkelasi.ir/article/farsi7-n2",
    impressions: 183816,
    clicks: 13206,
    ctr: 0.0718435827,
    position: 7.0216738478,
  },
  {
    page: "https://hamkelasi.ir/article/riazi6-n2",
    impressions: 171976,
    clicks: 16319,
    ctr: 0.0948911476,
    position: 6.3418849142,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-فیزیک-دهم-تجربی-فصل-چهارم-به-همراه-حل-تمرینات",
    impressions: 162979,
    clicks: 7715,
    ctr: 0.047337387,
    position: 6.5846888249,
  },
  {
    page: "https://hamkelasi.ir/article/motaleat6-n2",
    impressions: 162104,
    clicks: 9271,
    ctr: 0.0571916794,
    position: 6.9965577654,
  },
  {
    page: "https://hamkelasi.ir/article/oloom9-n2",
    impressions: 155452,
    clicks: 37128,
    ctr: 0.2388389985,
    position: 4.7883784062,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-تاریخ-دهم-انسانی",
    impressions: 151905,
    clicks: 5139,
    ctr: 0.0338303545,
    position: 5.5655179224,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-فارسی-اول-ابتدایی",
    impressions: 149356,
    clicks: 4725,
    ctr: 0.0316358231,
    position: 6.5551835882,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-ریاضی-دوازدهم-تجربی",
    impressions: 147313,
    clicks: 8418,
    ctr: 0.0571436329,
    position: 6.00426982,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-اقتصاد-دهم-انسانی",
    impressions: 146438,
    clicks: 5844,
    ctr: 0.0399076742,
    position: 6.2887092148,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-شیمی-یازدهم",
    impressions: 138268,
    clicks: 14859,
    ctr: 0.1074652125,
    position: 6.1550394885,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوالات-علوم-پنجم",
    impressions: 134114,
    clicks: 4591,
    ctr: 0.0342320712,
    position: 6.5278121598,
  },
  {
    page: "https://hamkelasi.ir/article/oloom7-n2",
    impressions: 132439,
    clicks: 11721,
    ctr: 0.0885011213,
    position: 6.8648434374,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-جامع-فارسی-دهم-رضایی",
    impressions: 131914,
    clicks: 17757,
    ctr: 0.134610428,
    position: 6.3800809618,
  },
  {
    page: "https://hamkelasi.ir/article/farsi6-n2",
    impressions: 130806,
    clicks: 8733,
    ctr: 0.0667629925,
    position: 7.5645612587,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-نگارش-دوازدهم",
    impressions: 128767,
    clicks: 17204,
    ctr: 0.1336056598,
    position: 4.147724184,
  },
  {
    page: "https://hamkelasi.ir/article/farsi8-n2",
    impressions: 124618,
    clicks: 4449,
    ctr: 0.0357011026,
    position: 8.502640068,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-فارسی-دوم-ابتدایی",
    impressions: 123359,
    clicks: 5503,
    ctr: 0.0446096353,
    position: 6.7154727259,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-تفکر-و-سواد-رسانه-ای-دهم",
    impressions: 117925,
    clicks: 11121,
    ctr: 0.0943057028,
    position: 5.056747933,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-شیمی-دهم",
    impressions: 115967,
    clicks: 20726,
    ctr: 0.1787232575,
    position: 4.9415954539,
  },
  {
    page: "https://hamkelasi.ir/article/zaban9-n2",
    impressions: 115221,
    clicks: 6672,
    ctr: 0.0579061109,
    position: 7.1476553753,
  },
  {
    page: "https://hamkelasi.ir/article/oloom6-n2",
    impressions: 105995,
    clicks: 6556,
    ctr: 0.0618519741,
    position: 6.7543469032,
  },
  {
    page: "https://hamkelasi.ir/article/motaleat7-n2",
    impressions: 102651,
    clicks: 6006,
    ctr: 0.0585089283,
    position: 6.8100846558,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-نگارش-یازدهم",
    impressions: 94396,
    clicks: 5427,
    ctr: 0.0574918429,
    position: 4.3125979914,
  },
  {
    page: "https://hamkelasi.ir/article/arabi7-n2",
    impressions: 93001,
    clicks: 7784,
    ctr: 0.0836980248,
    position: 6.0636874872,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-فصل-سوم-شیمی-یازدهم-تجربی-به-همراه-حل-تمرین-ها",
    impressions: 91643,
    clicks: 7360,
    ctr: 0.0803116441,
    position: 5.8259878005,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-فارسی-هفتم",
    impressions: 83674,
    clicks: 7857,
    ctr: 0.0939001362,
    position: 5.8664220666,
  },
  {
    page: "https://hamkelasi.ir/article/zaban7-n2",
    impressions: 82861,
    clicks: 5480,
    ctr: 0.0661348523,
    position: 8.0783480769,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-درس-به-درس-فارسی-هفتم",
    impressions: 82819,
    clicks: 10166,
    ctr: 0.1227496106,
    position: 7.2499788696,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-فارسی-نهم",
    impressions: 78592,
    clicks: 5905,
    ctr: 0.0751348738,
    position: 7.3607237378,
  },
  {
    page: "https://hamkelasi.ir/blog/معرفی-رشته-انسانی-و-کتاب-ها-و-شغل-های-این-رشته",
    impressions: 78545,
    clicks: 4773,
    ctr: 0.0607677128,
    position: 7.5945381628,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-جامع-عربی-سال-دهم",
    impressions: 76589,
    clicks: 8888,
    ctr: 0.1160479964,
    position: 5.7839768113,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-جامع-عربی-یازدهم-تجربی-و-ریاضی",
    impressions: 74441,
    clicks: 12310,
    ctr: 0.1653658602,
    position: 5.0945849733,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-فصل-سوم-شیمی-دهم-آب-آهنگ-زندگی",
    impressions: 73276,
    clicks: 9199,
    ctr: 0.1255390578,
    position: 5.7071346689,
  },
  {
    page: "https://hamkelasi.ir/article/نمونه-سوال-آمادگی-دفاعی-دهم",
    impressions: 73019,
    clicks: 5000,
    ctr: 0.0684753283,
    position: 5.2351442775,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-جامع-فارسی-یازدهم",
    impressions: 71125,
    clicks: 9367,
    ctr: 0.1316977153,
    position: 5.1052091388,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-زبان-نهم",
    impressions: 66712,
    clicks: 7986,
    ctr: 0.1197085982,
    position: 4.9031208778,
  },
  {
    page: "https://hamkelasi.ir/article/arabi8-n2",
    impressions: 63205,
    clicks: 4633,
    ctr: 0.0733011629,
    position: 6.996171189,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-آمادگی-دفاعی-نهم",
    impressions: 62061,
    clicks: 11964,
    ctr: 0.1927780732,
    position: 5.0834501539,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-عربی-هفتم",
    impressions: 57692,
    clicks: 4464,
    ctr: 0.0773764127,
    position: 5.3709873119,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-فصل-اول-شیمی-یازدهم-تجربی-به-همراه-حل-تمرین-ها",
    impressions: 55902,
    clicks: 7419,
    ctr: 0.132714393,
    position: 6.9109870845,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-فصل-سوم-شیمی-یازدهم-استاد-شرفیان",
    impressions: 49598,
    clicks: 6060,
    ctr: 0.1221823461,
    position: 5.7528529376,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-فصل-اول-فیزیک-یازدهم-فصل-الکتریسیته-ساکن",
    impressions: 48683,
    clicks: 4810,
    ctr: 0.0988024567,
    position: 6.3562639936,
  },
  {
    page: "https://hamkelasi.ir/article/گام-به-گام-فصل-دوم-شیمی-یازدهم-تجربی-به-همراه-حل-تمرین-ها",
    impressions: 48682,
    clicks: 9058,
    ctr: 0.1860646646,
    position: 6.5376936034,
  },
  {
    page: "https://hamkelasi.ir/article/دانلود-جزوه-فصل-دوم-شیمی-یازدهم-استاد-شرفیان",
    impressions: 43097,
    clicks: 4557,
    ctr: 0.1057382184,
    position: 6.5925238416,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-جامع-عربی-دهم-انسانی",
    impressions: 43051,
    clicks: 8009,
    ctr: 0.1860351676,
    position: 5.1353278669,
  },
  {
    page: "https://hamkelasi.ir/article/نکات-خط-به-خط-فصل-اول-شیمی-یازدهم-مهندس-صحابی",
    impressions: 41575,
    clicks: 7272,
    ctr: 0.1749128082,
    position: 5.4984726398,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-فصل-پنجم-فیزیک-دهم-ریاضی-استاد-انصاری-تبار",
    impressions: 32840,
    clicks: 4456,
    ctr: 0.1356881851,
    position: 5.9789890378,
  },
  {
    page: "https://hamkelasi.ir/article/جزوه-فصل-چهارم-فیزیک-دهم-رشته-تجربی-به-همراه-نمونه-سوال-استاد-انصاری-تبار",
    impressions: 30686,
    clicks: 4482,
    ctr: 0.1460600926,
    position: 5.961350453,
  },
  {
    page: "https://hamkelasi.ir/",
    impressions: 17494,
    clicks: 4771,
    ctr: 0.2727220761,
    position: 3.4776494798,
  },
];
