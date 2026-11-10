export interface EventRecap {
  slug: string
  city: string
  buttonLabel: string
  youtubeId?: string
  youtubeUrl?: string
  /** Optional per-city hero paragraph; falls back to EVENT_RECAP_HEADING.heroNote. */
  recapNote?: string
  dateDisplay?: string
  venue?: string
  theme?: string
  gallery: string[]
}

export const EVENT_RECAP_HEADING = {
  eyebrow: 'Event Recap',
  titleLead: 'Inside',
  titleHighlight: 'the event',
  videoTitleLead: 'Watch the',
  videoTitleHighlight: 'Aftermovie',
  galleryTitleLead: 'Event',
  galleryTitleHighlight: 'Glimpses',
  heroNote:
    'The Humans First conversation brought together people from diverse walks of life to explore what it meant to thrive in the age of AI. Led by Vineet Nayar, the session went beyond technology to question, debate and reimagine how AI could be harnessed while strengthening the human qualities that would matter most in the future.',
  galleryEmpty: 'Photographs from this city will be added here soon.',
} as const

export const EVENT_RECAPS: EventRecap[] = [
  {
    slug: 'delhi',
    city: 'Delhi',
    buttonLabel: 'Inside Delhi Event',
    youtubeId: 'Eih2npEKX_E',
    youtubeUrl: 'https://youtu.be/Eih2npEKX_E',
    gallery: [
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC_1334_1790158068651_78ek.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC_1366_1790158132355_7p01.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC_1374_1790158132355_kgh3.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC_1483_1790158155541_29qk.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC_1533_1790158155541_hc3x.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC_1601_1790158173512_k8nx.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC_1697_1790158173512_1th9.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/NIK_2409_1790158193637_xx3n.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/NIK_2416_1790158193637_1kyy.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/NIK_2437_1790158211542_7tel.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/NIK_2618_1790158211542_dl34.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/NIK_2654_1790158230496_xkm6.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/NIK_2678_1790158230496_a3da.jpg',
    ],
  },
  {
    slug: 'mumbai',
    city: 'Mumbai',
    buttonLabel: 'Inside Mumbai Event',
    youtubeId: 'Gbt3fdPXyto',
    youtubeUrl: 'https://youtu.be/Gbt3fdPXyto',
    gallery: [
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0706_1790228096621_zt5q.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0760_1790228135864_9nhu.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0768_1790228135865_09oc.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0809__1__1790228135874_5e7l.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0826_1790228271925_qno4.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0831_1790228271957_aqpk.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0872_1790228322321_ha3m.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0958_1790228322321_y586.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0960_1790228322322_iqzj.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A0977_1790228826569_xx98.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A1012_1790228826569_l9wp.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A1053_1790228943203_q4gg.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A1061_1790228943203_tu2t.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A1070_1790228997347_qtdj.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A1071_1790228997347_4pu9.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/5B7A1082_1790228997347_oaqg.jpg',
    ],
  },
  {
    slug: 'bengaluru',
    city: 'Bengaluru',
    buttonLabel: 'Inside Bengaluru Event',
    youtubeId: '3q7hlLRxEeY',
    youtubeUrl: 'https://youtu.be/3q7hlLRxEeY',
    gallery: [
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC05857_1790229151312_lbu8.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC05988_1790229151313_p046.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06061_1790229272570_bng5.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06093_1790229272571_oft3.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06230_1790229307346_xg8d.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06305_1790229307347_2rxj.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06308_1790229346224_fmfx.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06321_1790229346224_7uje.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06367_1790229399643_aeaw.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06408_1790229399644_a0ws.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/VLC06598__1___1__1790232613554_spiq.jpg',
    ],
  },
  {
    slug: 'hyderabad',
    city: 'Hyderabad',
    buttonLabel: 'Inside Hyderabad Event',
    youtubeId: 'jS_38eDvrEk',
    youtubeUrl: 'https://youtu.be/jS_38eDvrEk',
    gallery: [
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07121_1791358748986_qj24.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07078_1791358856302_v0pn.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07171_1791358908358_z63a.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07126_1791358960358_wz52.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07051__2__1791359292329_4hvk.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07189_1791360366721_kx38.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07193_1791360396582_31tp.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07209_1791360417237_5zu5.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07216_1791360445315_r20z.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07234_1791360464223_xd6z.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/DSC07058_1791361169094_i8zw.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/1_1791364331809_jiaq.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/2_1791364331809_bxfr.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/e_1791364331809_fuo0.jpg',
    ],
  },
  {
    slug: 'chennai',
    city: 'Chennai',
    buttonLabel: 'Inside Chennai Event',
    youtubeId: 'tdaYL7_4vFc',
    youtubeUrl: 'https://youtu.be/tdaYL7_4vFc',
    gallery: [
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0058_1791363712070_fq5b.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0362_1791363731864_tfov.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0334_-_Copy_1791363748810_gidr.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0315_1791363763961_gw0n.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0255_1791363780088_znqj.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0248_1791363797803_4zrx.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0217_1791363822222_xp9k.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0146_1791363838544_ed7g.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0144_1791363856119_3l6x.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0114_1791363875871_auxx.jpg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/JMS_0139_1791363875871_czzj.jpg',
    ],
  },
  {
    slug: 'kolkata',
    city: 'Kolkata',
    buttonLabel: 'Inside Kolkata Event',
    youtubeId: 'vo6CwwtgZKs',
    youtubeUrl: 'https://youtu.be/vo6CwwtgZKs',
    gallery: [
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_2.05.56_PM__1__1792653202059_x3af.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_2.05.56_PM__2__1792653202059_pnj4.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_2.05.56_PM__3__1792653202060_ts5s.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_2.05.56_PM__4__1792653202060_s0o2.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_2.05.56_PM__5__1792653202060_115a.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_2.05.56_PM__6__1792653202060_963b.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_2.05.56_PM__7__1792653202060_39oa.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_2.05.56_PM_1792653202061_5ike.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_3.35.03_PM__1__1792653202061_y23x.jpeg',
      'https://hfms-book.s3.us-east-2.amazonaws.com/WhatsApp_Image_2026-10-13_at_3.35.03_PM_1792653202061_4gdm.jpeg',
    ],
  },
  {
    slug: 'paris',
    city: 'Paris',
    buttonLabel: 'Inside Paris Event',
    dateDisplay: '21 Oct 2026',
    venue: 'UNLEASH World, Thales HQ and HEC Paris',
    theme: 'Three Sessions in One Day',
    gallery: [
      'https://assets.nexuses.xyz/1_1793618403177_6vvm.jpeg',
      'https://assets.nexuses.xyz/2_1793618403177_yeyp.jpeg',
      'https://assets.nexuses.xyz/3_1793618403177_m416.jpeg',
      'https://assets.nexuses.xyz/4_1793618403177_ncvi.jpeg',
      'https://assets.nexuses.xyz/5_1793618403177_1tgm.jpeg',
      'https://assets.nexuses.xyz/6_1793618403178_4rs9.jpeg',
      'https://assets.nexuses.xyz/7_1793618403178_n9ng.jpeg',
      'https://assets.nexuses.xyz/8_1793618403178_wme5.jpeg',
      'https://assets.nexuses.xyz/9_1793618403178_fby2.jpeg',
      'https://assets.nexuses.xyz/10_1793618403178_o6qj.jpeg',
      'https://assets.nexuses.xyz/11_1793618437695_4o31.jpeg',
      'https://assets.nexuses.xyz/13_1793618437695_bh2z.jpeg',
      'https://assets.nexuses.xyz/14_1793618437696_218v.jpeg',
      'https://assets.nexuses.xyz/16_1793618437696_kge1.jpeg',
      'https://assets.nexuses.xyz/20_1793618437697_6h1z.jpeg',
      'https://assets.nexuses.xyz/21_1793618468721_k7yg.jpeg',
      'https://assets.nexuses.xyz/22_1793618468721_rjy0.jpeg',
      'https://assets.nexuses.xyz/23_1793618468722_ott1.jpeg',
      'https://assets.nexuses.xyz/24_1793618468735_oyd8.jpeg',
      'https://assets.nexuses.xyz/25_1793618468735_2sl6.jpeg',
      'https://assets.nexuses.xyz/26_1793618468735_ugmi.jpeg',
      'https://assets.nexuses.xyz/27_1793618468735_k8lr.jpeg',
      'https://assets.nexuses.xyz/28_1793618468735_y4tr.jpeg',
      'https://assets.nexuses.xyz/29_1793618468735_t2no.jpeg',
      'https://assets.nexuses.xyz/30_1793618468735_bazy.jpeg',
      'https://assets.nexuses.xyz/31_1793618506741_f6b4.jpeg',
      'https://assets.nexuses.xyz/32_1793618506741_eex9.jpeg',
      'https://assets.nexuses.xyz/33_1793618506741_sjad.jpeg',
      'https://assets.nexuses.xyz/34_1793618506741_m7ug.jpeg',
      'https://assets.nexuses.xyz/35_1793618506741_d0w0.jpeg',
      'https://assets.nexuses.xyz/36_1793618506741_1o0d.jpeg',
      'https://assets.nexuses.xyz/37_1793618506741_4w9l.jpeg',
      'https://assets.nexuses.xyz/38_1793618506741_hcdc.jpeg',
      'https://assets.nexuses.xyz/39_1793618506741_civq.jpeg',
    ],
  },
]

export function getEventRecapBySlug(slug: string): EventRecap | undefined {
  return EVENT_RECAPS.find((recap) => recap.slug === slug)
}

export function getEventRecapByCity(city: string): EventRecap | undefined {
  return EVENT_RECAPS.find((recap) => recap.city === city)
}
