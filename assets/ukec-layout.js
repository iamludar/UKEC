(function () {
  if (window.__ukecLayoutApplied) return;
  window.__ukecLayoutApplied = true;

  var script = document.currentScript;
  if (!script) {
    var scripts = Array.prototype.slice.call(document.scripts);
    script = scripts.reverse().find(function (item) {
      return item.src && item.src.indexOf("/assets/ukec-layout.js") !== -1;
    });
  }

  var siteRoot = "/";
  if (script && script.src && script.src.indexOf("/assets/") !== -1) {
    siteRoot = script.src.split("/assets/")[0] + "/";
  }

  function url(path) {
    return siteRoot + path.replace(/^\/+/, "");
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function addStyle() {
    if (document.getElementById("ukec-layout-style")) return;
    var style = document.createElement("style");
    style.id = "ukec-layout-style";
    var heroGraduates = 'url("' + url("assets/ukec-media/ukec-hero-graduates.jpg") + '")';
    var bannerGraduates = 'url("' + url("assets/ukec-media/ukec-banner-graduates.jpg") + '")';
    var bannerCampus = 'url("' + url("assets/ukec-media/ukec-banner-campus.jpg") + '")';
    var bannerModern = 'url("' + url("assets/ukec-media/ukec-banner-modern-campus.jpg") + '")';
    var bannerClassic = 'url("' + url("assets/ukec-media/ukec-banner-classic-campus.jpg") + '")';
    var bannerPartners = 'url("' + url("assets/ukec-media/ukec-banner-partners.jpg") + '")';
    var bannerUclan = 'url("' + url("assets/ukec-media/ukec-banner-uclan-intro.jpg") + '")';
    var heroSkyline = 'url("' + url("assets/ukec-media/ukec-hero-skyline.jpg") + '")';
    var courseUclan = 'url("' + url("assets/ukec-media/ukec-course-uclan.jpg") + '")';
    var cardLibrary = 'url("' + url("assets/ukec-media/ukec-card-library.jpg") + '")';
    var cardLecture = 'url("' + url("assets/ukec-media/ukec-card-lecture.jpg") + '")';
    var cardWorkshop = 'url("' + url("assets/ukec-media/ukec-card-workshop.jpg") + '")';
    var cardGroup = 'url("' + url("assets/ukec-media/ukec-card-group.jpg") + '")';
    var cardModern = 'url("' + url("assets/ukec-media/ukec-card-modern.jpg") + '")';
    var cardBrest = 'url("' + url("assets/ukec-media/ukec-card-brest.jpg") + '")';
    var cardBucks = 'url("' + url("assets/ukec-media/ukec-card-bucks.jpg") + '")';
    var cardCourtyard = 'url("' + url("assets/ukec-media/ukec-card-courtyard.jpg") + '")';
    var cardEurope = 'url("' + url("assets/ukec-media/ukec-card-europe.jpg") + '")';
    var cardStudents = 'url("' + url("assets/ukec-media/ukec-card-students-campus.jpg") + '")';
    style.textContent = [
      ".ukec-site-topbar,.ukec-site-header,.ukec-site-footer{font-family:Inter,Arial,sans-serif;letter-spacing:0}",
      ".ukec-site-topbar{background:#06182e;color:#dce6f2;font-size:13px}",
      ".ukec-site-topbar-inner{width:92%;max-width:1180px;margin:0 auto;min-height:38px;display:flex;align-items:center;justify-content:space-between;gap:16px}",
      ".ukec-site-topbar a{color:#dce6f2;text-decoration:none}.ukec-site-topbar a:hover{color:#f2c94c}",
      ".ukec-site-topbar-contact{display:flex;gap:18px;flex-wrap:wrap}",
      ".ukec-site-header{background:#0b243d;color:#fff;position:relative;z-index:50;box-shadow:0 1px 0 rgba(255,255,255,.08)}",
      ".ukec-site-nav{width:92%;max-width:1180px;margin:0 auto;min-height:126px;display:flex;align-items:center;justify-content:space-between;gap:28px}",
      ".ukec-site-logo{display:inline-flex;align-items:center;text-decoration:none}.ukec-site-logo img{width:172px;max-width:34vw;height:114px;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,.24));display:block}.uui-logo_logotype,.nav04_image,.navbar-brand img{width:156px!important;height:106px!important;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,.24))}",
      ".ukec-site-menu{display:flex;align-items:center;gap:4px}.ukec-site-menu a{color:#fff;text-decoration:none;font-weight:800;font-size:15px;padding:34px 16px;line-height:1;white-space:nowrap}",
      ".ukec-site-menu a:hover,.ukec-site-menu a.is-active{color:#f2c94c}",
      ".ukec-site-toggle{display:none;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.08);color:#fff;border-radius:4px;width:44px;height:42px;align-items:center;justify-content:center;font-weight:800}",
      ".ukec-site-toggle span{display:block;width:18px;height:2px;background:#fff;box-shadow:0 6px 0 #fff,0 -6px 0 #fff}",
      ".ukec-site-footer{background:#071a31;color:#dce6f2}",
      ".ukec-footer-shell{width:92%;max-width:1180px;margin:0 auto;padding:54px 0 26px}",
      ".ukec-footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr 1.15fr;gap:34px;align-items:start}",
      ".ukec-footer-logo{width:220px;max-width:100%;height:auto;filter:drop-shadow(0 10px 18px rgba(0,0,0,.28));margin-bottom:18px}.ukec-footer-title{font-size:14px;font-weight:800;text-transform:uppercase;color:#f2c94c;margin-bottom:14px}",
      ".ukec-footer-text{font-size:14px;line-height:1.68;color:#b9c6d6;margin:0}.ukec-footer-links{display:grid;gap:9px}",
      ".ukec-footer-links a,.ukec-footer-links span{font-size:14px;line-height:1.45;color:#dce6f2;text-decoration:none}.ukec-footer-links a:hover{color:#f2c94c}",
      ".ukec-footer-contact{display:grid;gap:12px;font-size:14px;line-height:1.55;color:#dce6f2}.ukec-footer-contact a{color:inherit;text-decoration:none}",
      ".ukec-footer-contact strong{display:block;color:#f2c94c;font-size:12px;text-transform:uppercase;margin-bottom:2px}",
      ".ukec-footer-note{border-top:1px solid rgba(255,255,255,.14);margin-top:34px;padding-top:20px;display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;font-size:13px;line-height:1.55;color:#9eacbf}",
      ".lnd_container.herocontainer,.lnd_hero,.h07,.h08,.h09{background-image:linear-gradient(112deg,rgba(5,22,49,.92),rgba(13,70,98,.78) 56%,rgba(141,16,36,.62))," + heroGraduates + "!important;background-size:cover!important;background-position:center!important}",
      ".full_with_bg{background-image:linear-gradient(112deg,rgba(7,26,49,.88),rgba(13,70,98,.72) 58%,rgba(141,16,36,.58))," + bannerGraduates + "!important;background-size:cover!important;background-position:center!important}",
      ".full_with_bg.aboutus,.full_with_bg.story,.full_with_bg.alumni,.full_with_bg.jobs,.full_with_bg.policies,.full_with_bg.singlepolicy{background-image:linear-gradient(112deg,rgba(7,26,49,.86),rgba(13,70,98,.72))," + bannerCampus + "!important}",
      ".full_with_bg.contactus,.full_with_bg.ctc,.full_with_bg.ctl,.full_with_bg.col,.full_with_bg.partnerwithus,.full_with_bg.rc,.full_with_bg.adp,.full_with_bg.cics{background-image:linear-gradient(112deg,rgba(7,26,49,.86),rgba(13,70,98,.72),rgba(141,16,36,.5))," + bannerPartners + "!important}",
      ".full_with_bg.mba,.full_with_bg.imba,.full_with_bg.gmba,.full_with_bg.mbaon,.full_with_bg.gmbaae,.full_with_bg.ctu{background-image:linear-gradient(112deg,rgba(7,26,49,.82),rgba(13,70,98,.64))," + bannerModern + "!important}",
      ".full_with_bg.ctu,.full_with_bg.l45bmlibt,.full_with_bg.bml{background-image:linear-gradient(112deg,rgba(7,26,49,.84),rgba(13,70,98,.62))," + bannerUclan + "!important}",
      ".full_with_bg.l4-5a,.full_with_bg.l7af,.full_with_bg.l4-5tt,.full_with_bg.l7ds,.full_with_bg.cs,.full_with_bg.hrm,.full_with_bg.l4e,.full_with_bg.ba,.full_with_bg.ac,.full_with_bg.ct{background-image:linear-gradient(112deg,rgba(7,26,49,.86),rgba(13,70,98,.7))," + bannerClassic + "!important}",
      ".linkboxcontent,.categoryimagebox,.b07_blog_image.courseblockminheight,.training-image,.newsimage,.featurednewsitem,.featureblock,.studentlife-image{background-size:cover!important;background-position:center!important}",
      ".linkboxcontent,.categoryimagebox,.b07_blog_image.courseblockminheight,.training-image{background-image:" + cardLibrary + "!important}",
      ".linkboxcontent.bm,.linkboxcontent.business,.categoryimagebox.bm,.categoryimagebox.acc,.categoryimagebox.law{background-image:" + cardLecture + "!important}",
      ".linkboxcontent.it,.linkboxcontent.cs,.categoryimagebox.cs,.categoryimagebox.cse,.categoryimagebox.si{background-image:" + cardModern + "!important}",
      ".linkboxcontent.eu,.linkboxcontent.hrm,.categoryimagebox.hr,.categoryimagebox.edu,.categoryimagebox.psy,.categoryimagebox.hc{background-image:" + cardWorkshop + "!important}",
      ".b07_blog_image.courseblockminheight.cit1,.b07_blog_image.courseblockminheight.cit2,.b07_blog_image.courseblockminheight.cit3,.b07_blog_image.courseblockminheight.cit4,.b07_blog_image.courseblockminheight.cit5,.b07_blog_image.courseblockminheight.cit6,.b07_blog_image.courseblockminheight.bmlt{background-image:" + cardBucks + "!important}",
      ".b07_blog_image.courseblockminheight.ctim1,.b07_blog_image.courseblockminheight.ctim2,.b07_blog_image.courseblockminheight.ctu,.b07_blog_image.courseblockminheight.maon,.b07_blog_image.courseblockminheight.gmbaaet{background-image:" + courseUclan + "!important}",
      ".b07_blog_image.courseblockminheight.ctim3,.b07_blog_image.courseblockminheight.citm5,.b07_blog_image.courseblockminheight.citm8,.b07_blog_image.courseblockminheight.citm9,.b07_blog_image.courseblockminheight.dibl1,.b07_blog_image.courseblockminheight.llb{background-image:" + cardEurope + "!important}",
      ".b07_blog_image.courseblockminheight.dcs1,.b07_blog_image.courseblockminheight.cmpg,.b07_blog_image.courseblockminheight.ds2,.b07_blog_image.courseblockminheight.l8b{background-image:" + cardModern + "!important}",
      ".b07_blog_image.courseblockminheight.bs1,.b07_blog_image.courseblockminheight.l45htmt,.b07_blog_image.courseblockminheight.l45bmlibt{background-image:" + cardBrest + "!important}",
      ".newsimage,.featurednewsitem,.studentlife-image,.featureblock{background-image:" + cardGroup + "!important}",
      ".g01_image_link_01,.g01_image_link_02,.g01_image_link_03,.g01_image_link_04,.g01_image_link_05,.g01_image_link_06,.g01_image_link_07,.g01_image_link_08,.g01_image_link_10,.g01_image_link_11,.g01_image_link_12{background-image:" + cardStudents + "!important;background-size:cover!important;background-position:center!important}",
      ".imagegallerythumb{background-image:" + cardStudents + "!important;background-size:cover!important;background-position:center!important}",
      ".imagegallerythumb.silverborder.ee1,.imagegallerythumb.silverborder.ee2,.imagegallerythumb.silverborder.ee3,.imagegallerythumb.silverborder.ee4,.imagegallerythumb.silverborder.ee5,.imagegallerythumb.silverborder.ee6,.imagegallerythumb.silverborder.ee7,.imagegallerythumb.silverborder.ee8,.imagegallerythumb.silverborder.ee9,.imagegallerythumb.silverborder.ee10,.imagegallerythumb.silverborder.ee11,.imagegallerythumb.silverborder.ee12,.imagegallerythumb.silverborder.ee13,.imagegallerythumb.silverborder.ee14,.imagegallerythumb.silverborder.ee15,.imagegallerythumb.silverborder.ee16,.imagegallerythumb.silverborder.ee17,.imagegallerythumb.silverborder.ee18,.imagegallerythumb.silverborder.ee19,.imagegallerythumb.silverborder.ee20,.imagegallerythumb.silverborder.ee21,.imagegallerythumb.silverborder.ee22,.imagegallerythumb.silverborder.ee23,.imagegallerythumb.silverborder.ee24,.imagegallerythumb.silverborder.ee25,.imagegallerythumb.silverborder.ee26{background-image:" + cardLecture + "!important}",
      ".imagegallerythumb.l1,.imagegallerythumb.l2,.imagegallerythumb.l3,.imagegallerythumb.l4,.imagegallerythumb.l5,.imagegallerythumb.l6,.imagegallerythumb.l7,.imagegallerythumb.l8,.imagegallerythumb.i9{background-image:" + cardCourtyard + "!important}",
      ".b01_blog_image,.b02_blog_image,.b03_blog_image,.b04_blog_image_feature,.b04_blog_image_02,.b04_blog_image_03,.b04_blog_image_04,.b05_blog_image,.b06_blog_image,.f12_blog_image{background-image:" + bannerClassic + "!important;background-size:cover!important;background-position:center!important}",
      ".lnd_licence_block,.m06_image,.m08_image,.m09_image,.m11_image{background-image:" + heroSkyline + "!important;background-size:cover!important;background-position:center!important}",
      ".ukec-partner-page{font-family:Inter,Arial,sans-serif;background:#f6f8fb;color:#10233f;letter-spacing:0}.ukec-partner-page *{box-sizing:border-box}.ukec-partner-shell{width:92%;max-width:1180px;margin:0 auto}.ukec-partner-hero{position:relative;overflow:hidden;color:#fff;background:linear-gradient(112deg,rgba(5,22,49,.96),rgba(13,70,98,.84) 54%,rgba(141,16,36,.64))," + bannerPartners + " center/cover;min-height:620px;display:flex;align-items:center;padding:84px 0 92px}.ukec-partner-hero-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(310px,.72fr);gap:52px;align-items:center}.ukec-partner-eyebrow{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(255,255,255,.34);background:rgba(255,255,255,.08);padding:9px 14px;font-size:13px;font-weight:800;text-transform:uppercase}.ukec-partner-eyebrow span{width:8px;height:8px;background:#f2c94c;display:inline-block}.ukec-partner-hero h1{font-size:56px;line-height:1.04;margin:22px 0 18px;font-weight:800;letter-spacing:0}.ukec-partner-hero p{font-size:19px;line-height:1.68;color:rgba(255,255,255,.88);max-width:720px;margin:0 0 30px}.ukec-partner-actions{display:flex;gap:14px;flex-wrap:wrap}.ukec-partner-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:13px 20px;border-radius:4px;font-weight:800;font-size:15px;text-decoration:none}.ukec-partner-btn.primary{background:#f2c94c;color:#06182e}.ukec-partner-btn.secondary{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.38);color:#fff}.ukec-partner-proof{background:rgba(255,255,255,.94);color:#10233f;border-radius:8px;padding:28px;box-shadow:0 24px 70px rgba(0,0,0,.24)}.ukec-partner-proof-title{font-size:14px;font-weight:800;color:#8d1024;text-transform:uppercase;margin-bottom:14px}.ukec-partner-proof-large{font-size:32px;line-height:1.16;font-weight:800;margin-bottom:20px}.ukec-partner-proof-list{display:grid;gap:12px}.ukec-partner-proof-list div{border-top:1px solid #e4e8ef;padding-top:13px;font-size:15px;line-height:1.5}.ukec-partner-proof-list strong{display:block;color:#0d4662;margin-bottom:3px}.ukec-partner-strip{background:#fff;border-bottom:1px solid #e4e8ef}.ukec-partner-strip-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#e4e8ef}.ukec-partner-stat{background:#fff;padding:28px 24px}.ukec-partner-stat strong{display:block;font-size:26px;line-height:1.12;color:#8d1024;margin-bottom:7px}.ukec-partner-stat span{font-size:14px;line-height:1.45;color:#526071}.ukec-partner-section{padding:76px 0}.ukec-partner-section.white{background:#fff}.ukec-partner-section.dark{background:#0b243d;color:#fff}.ukec-partner-label{font-size:13px;font-weight:800;text-transform:uppercase;color:#8d1024;margin-bottom:10px}.ukec-partner-section.dark .ukec-partner-label{color:#f2c94c}.ukec-partner-h2{font-size:38px;line-height:1.13;margin:0 0 14px;font-weight:800;letter-spacing:0}.ukec-partner-lede{font-size:18px;line-height:1.65;color:#4f5d70;margin:0}.ukec-partner-section.dark .ukec-partner-lede{color:rgba(255,255,255,.78)}.ukec-partner-split{display:grid;grid-template-columns:.9fr 1.1fr;gap:46px;align-items:center}.ukec-partner-media{min-height:390px;border-radius:8px;background-size:cover;background-position:center;box-shadow:0 20px 50px rgba(16,35,63,.16)}.ukec-partner-media.agency{background-image:" + cardModern + "}.ukec-partner-media.institutions{background-image:" + cardGroup + "}.ukec-partner-feature-list{display:grid;gap:14px;margin-top:24px}.ukec-partner-feature{display:grid;grid-template-columns:42px 1fr;gap:14px;align-items:start}.ukec-partner-feature b{width:42px;height:42px;border-radius:6px;background:#0d4662;color:#fff;display:flex;align-items:center;justify-content:center}.ukec-partner-feature h3{font-size:19px;line-height:1.3;margin:0 0 5px;font-weight:800}.ukec-partner-feature p{font-size:15px;line-height:1.62;color:#556273;margin:0}.ukec-partner-card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px}.ukec-partner-card{background:#fff;border:1px solid #e4e8ef;border-radius:8px;overflow:hidden}.ukec-partner-card-img{height:136px;background-size:cover;background-position:center}.ukec-partner-card:nth-child(1) .ukec-partner-card-img{background-image:" + cardBucks + "}.ukec-partner-card:nth-child(2) .ukec-partner-card-img{background-image:" + cardLibrary + "}.ukec-partner-card:nth-child(3) .ukec-partner-card-img{background-image:" + cardLecture + "}.ukec-partner-card:nth-child(4) .ukec-partner-card-img{background-image:" + cardWorkshop + "}.ukec-partner-card:nth-child(5) .ukec-partner-card-img{background-image:" + cardStudents + "}.ukec-partner-card:nth-child(6) .ukec-partner-card-img{background-image:" + cardCourtyard + "}.ukec-partner-card-body{padding:24px}.ukec-partner-card h3{font-size:20px;line-height:1.25;margin:0 0 9px;font-weight:800}.ukec-partner-card p{font-size:15px;line-height:1.62;color:#566173;margin:0}.ukec-partner-band{background:linear-gradient(112deg,rgba(6,24,46,.95),rgba(8,49,71,.86) 58%,rgba(141,16,36,.58))," + bannerModern + " center/cover;color:#fff;padding:72px 0}.ukec-partner-band-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start}.ukec-partner-audience{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.ukec-partner-audience div{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:6px;padding:14px;font-weight:800}.ukec-partner-process{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}.ukec-partner-step{background:#fff;border:1px solid #e4e8ef;border-radius:8px;padding:24px}.ukec-partner-step b{display:inline-flex;width:34px;height:34px;border-radius:6px;background:#8d1024;color:#fff;align-items:center;justify-content:center;margin-bottom:16px}.ukec-partner-step h3{font-size:18px;line-height:1.3;margin:0 0 8px;font-weight:800}.ukec-partner-step p{font-size:14px;line-height:1.58;color:#566173;margin:0}.ukec-partner-cta{background:#fff;padding:76px 0}.ukec-partner-cta-box{display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;border:1px solid #e4e8ef;border-left:6px solid #8d1024;border-radius:8px;padding:34px;background:#f7f8fb}.ukec-partner-contact{display:flex;gap:16px;flex-wrap:wrap;color:#4f5b6b;font-size:15px;margin-top:12px}.ukec-partner-contact strong{color:#10233f}",
      ".ukec-about-page{font-family:Inter,Arial,sans-serif;background:#f7f8fb;color:#10233f;letter-spacing:0}.ukec-about-page *{box-sizing:border-box}.ukec-about-shell{width:92%;max-width:1180px;margin:0 auto}.ukec-about-hero{background:#fff;border-bottom:1px solid #e4e8ef;padding:86px 0 74px}.ukec-about-hero-grid{display:grid;grid-template-columns:minmax(0,1fr) 430px;gap:58px;align-items:center}.ukec-about-kicker{display:inline-flex;align-items:center;gap:10px;color:#8d1024;font-size:13px;font-weight:800;text-transform:uppercase;margin-bottom:18px}.ukec-about-kicker span{width:8px;height:8px;background:#f2c94c;display:inline-block}.ukec-about-hero h1{font-size:58px;line-height:1.04;font-weight:800;letter-spacing:0;margin:0 0 20px}.ukec-about-intro{font-size:19px;line-height:1.68;color:#4a5568;max-width:760px;margin:0 0 28px}.ukec-about-actions{display:flex;gap:14px;flex-wrap:wrap}.ukec-about-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:13px 20px;border-radius:4px;font-size:15px;font-weight:800;text-decoration:none}.ukec-about-btn.primary{background:#0d4662;color:#fff}.ukec-about-btn.secondary{background:#fff;color:#10233f;border:1px solid #cbd3df}.ukec-about-identity{background:#0b243d;color:#fff;border-radius:8px;overflow:hidden;box-shadow:0 24px 70px rgba(16,35,63,.18)}.ukec-about-identity-img{height:245px;background:linear-gradient(180deg,rgba(11,36,61,.08),rgba(11,36,61,.35))," + bannerCampus + " center/cover}.ukec-about-identity-body{padding:26px}.ukec-about-identity-body strong{display:block;color:#f2c94c;font-size:13px;text-transform:uppercase;margin-bottom:10px}.ukec-about-identity-body p{margin:0;font-size:16px;line-height:1.62;color:#dce6f2}.ukec-about-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#e4e8ef;border-top:1px solid #e4e8ef;border-bottom:1px solid #e4e8ef}.ukec-about-fact{background:#fff;padding:26px}.ukec-about-fact strong{display:block;font-size:25px;line-height:1.15;color:#8d1024;margin-bottom:6px}.ukec-about-fact span{font-size:14px;line-height:1.45;color:#526071}.ukec-about-section{padding:74px 0}.ukec-about-section.white{background:#fff}.ukec-about-label{font-size:13px;font-weight:800;text-transform:uppercase;color:#8d1024;margin-bottom:10px}.ukec-about-h2{font-size:38px;line-height:1.15;margin:0 0 14px;font-weight:800;letter-spacing:0}.ukec-about-lede{font-size:18px;line-height:1.65;color:#526071;margin:0}.ukec-about-split{display:grid;grid-template-columns:.86fr 1.14fr;gap:48px;align-items:start}.ukec-about-panel{background:#fff;border:1px solid #e4e8ef;border-radius:8px;padding:28px}.ukec-about-panel.dark{background:#0b243d;color:#fff;border-color:#0b243d}.ukec-about-panel.dark .ukec-about-lede{color:#dce6f2}.ukec-about-list{display:grid;gap:14px;margin-top:24px}.ukec-about-row{display:grid;grid-template-columns:44px 1fr;gap:14px;border-top:1px solid #e4e8ef;padding-top:16px}.ukec-about-row:first-child{border-top:0;padding-top:0}.ukec-about-row b{width:44px;height:44px;border-radius:6px;background:#0d4662;color:#fff;display:flex;align-items:center;justify-content:center}.ukec-about-row h3{font-size:19px;line-height:1.28;margin:0 0 5px;font-weight:800}.ukec-about-row p{font-size:15px;line-height:1.62;color:#556273;margin:0}.ukec-about-panel.dark .ukec-about-row{border-color:rgba(255,255,255,.16)}.ukec-about-panel.dark .ukec-about-row p{color:#dce6f2}.ukec-about-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px}.ukec-about-card{background:#fff;border:1px solid #e4e8ef;border-radius:8px;padding:26px;min-height:220px}.ukec-about-card img{display:none}.ukec-about-card h3{font-size:20px;line-height:1.28;margin:0 0 10px;font-weight:800}.ukec-about-card p{font-size:15px;line-height:1.62;color:#566173;margin:0}.ukec-about-card::before{content:'';display:block;width:52px;height:52px;border-radius:8px;margin-bottom:18px;background:#edf3f5}.ukec-about-card:nth-child(1)::before{background:#edf3f5}.ukec-about-card:nth-child(2)::before{background:#f8ebef}.ukec-about-card:nth-child(3)::before{background:#fff5d6}.ukec-about-card:nth-child(4)::before{background:#e8f1f7}.ukec-about-card:nth-child(5)::before{background:#f3f0e8}.ukec-about-card:nth-child(6)::before{background:#edf3f5}.ukec-about-band{background:linear-gradient(112deg,rgba(7,26,49,.94),rgba(13,70,98,.86) 56%,rgba(141,16,36,.58))," + bannerModern + " center/cover;color:#fff;padding:72px 0}.ukec-about-band-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}.ukec-about-band .ukec-about-label{color:#f2c94c}.ukec-about-band .ukec-about-lede{color:rgba(255,255,255,.8)}.ukec-about-tags{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.ukec-about-tags div{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.1);border-radius:6px;padding:14px;font-weight:800}.ukec-about-cta{background:#fff;padding:74px 0}.ukec-about-cta-box{display:grid;grid-template-columns:1fr auto;gap:28px;align-items:center;border:1px solid #e4e8ef;border-left:6px solid #0d4662;border-radius:8px;padding:34px;background:#f7f8fb}.ukec-about-contact{display:flex;gap:16px;flex-wrap:wrap;color:#4f5b6b;font-size:15px;margin-top:12px}.ukec-about-contact strong{color:#10233f}",
      "@media(max-width:991px){.ukec-site-topbar-inner{justify-content:center}.ukec-site-nav{min-height:78px}.ukec-site-toggle{display:inline-flex}.ukec-site-menu{display:none;position:absolute;left:0;right:0;top:100%;background:#0b243d;border-top:1px solid rgba(255,255,255,.12);padding:8px 4%;box-shadow:0 22px 40px rgba(0,0,0,.22)}.ukec-site-menu.is-open{display:grid}.ukec-site-menu a{padding:16px 0;border-bottom:1px solid rgba(255,255,255,.1)}.ukec-footer-grid{grid-template-columns:1fr 1fr}.ukec-footer-shell{padding-top:42px}}",
      "@media(max-width:991px){.ukec-partner-hero-grid,.ukec-partner-split,.ukec-partner-band-grid,.ukec-partner-cta-box{grid-template-columns:1fr}.ukec-partner-hero h1{font-size:44px}.ukec-partner-strip-grid,.ukec-partner-card-grid,.ukec-partner-process{grid-template-columns:repeat(2,1fr)}.ukec-partner-media{min-height:320px}}",
      "@media(max-width:991px){.ukec-about-hero-grid,.ukec-about-split,.ukec-about-band-grid,.ukec-about-cta-box{grid-template-columns:1fr}.ukec-about-hero h1{font-size:46px}.ukec-about-identity{max-width:560px}.ukec-about-facts,.ukec-about-grid{grid-template-columns:repeat(2,1fr)}}",
      "@media(max-width:640px){.ukec-site-topbar-inner{display:block;padding:9px 0}.ukec-site-topbar-contact{display:grid;gap:5px}.ukec-site-nav{gap:14px}.ukec-footer-grid{grid-template-columns:1fr}.ukec-footer-note{display:block}.ukec-footer-note div+div{margin-top:10px}}"
      ,"@media(max-width:640px){.ukec-partner-hero{min-height:auto;padding:58px 0 68px}.ukec-partner-hero h1{font-size:36px}.ukec-partner-hero p,.ukec-partner-lede{font-size:16px}.ukec-partner-actions{display:grid}.ukec-partner-btn{width:100%}.ukec-partner-proof{padding:22px}.ukec-partner-proof-large{font-size:26px}.ukec-partner-strip-grid,.ukec-partner-card-grid,.ukec-partner-process,.ukec-partner-audience{grid-template-columns:1fr}.ukec-partner-section,.ukec-partner-band,.ukec-partner-cta{padding:54px 0}.ukec-partner-h2{font-size:30px}.ukec-partner-media{min-height:230px}.ukec-partner-card-img{height:128px}.ukec-partner-cta-box{padding:26px}.ukec-partner-feature{grid-template-columns:1fr}.ukec-partner-feature b{margin-bottom:0}}"
      ,"@media(max-width:640px){.ukec-about-hero{padding:56px 0 60px}.ukec-about-hero h1{font-size:36px}.ukec-about-intro,.ukec-about-lede{font-size:16px}.ukec-about-actions{display:grid}.ukec-about-btn{width:100%}.ukec-about-identity-img{height:190px}.ukec-about-facts,.ukec-about-grid,.ukec-about-tags{grid-template-columns:1fr}.ukec-about-section,.ukec-about-band,.ukec-about-cta{padding:54px 0}.ukec-about-h2{font-size:30px}.ukec-about-row{grid-template-columns:1fr}.ukec-about-cta-box{padding:26px}}"
    ].join("");
    document.head.appendChild(style);
  }

  function currentSection() {
    var path = window.location.pathname;
    if (path.indexOf("/project-list/") !== -1) return "projects";
    if (path.indexOf("/courses/") !== -1 || path.indexOf("/course/") !== -1 || path.indexOf("/certification/") !== -1) return "study";
    if (path.indexOf("/corporate-training/") !== -1 || path.indexOf("/business/") !== -1) return "business";
    if (path.indexOf("/about/") !== -1) return "about";
    if (path.indexOf("/contact") !== -1) return "contact";
    return "home";
  }

  function headerHtml() {
    var active = currentSection();
    function activeClass(name) {
      return active === name ? ' class="is-active"' : "";
    }
    return [
      '<div class="ukec-site-layout-header">',
      '<div class="ukec-site-topbar"><div class="ukec-site-topbar-inner"><div>United Kingdom Education Centre</div><div class="ukec-site-topbar-contact"><a href="mailto:virgina@globalukedu.com">virgina@globalukedu.com</a><a href="tel:+447591236179">+44 7591 236179</a></div></div></div>',
      '<header class="ukec-site-header"><nav class="ukec-site-nav" aria-label="Main navigation">',
      '<a class="ukec-site-logo" href="' + url("index.html") + '"><img src="' + url("assets/cdn.prod.website-files.com/5f0da8fd320acd2df8b13eb1/63ff59fb0b01cb563976beda_LIBT_Main_Logo_White.png") + '" alt="UKEC"/></a>',
      '<button class="ukec-site-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false"><span></span></button>',
      '<div class="ukec-site-menu"><a' + activeClass("study") + ' href="' + url("courses/all-courses/index.html") + '">Study</a><a' + activeClass("projects") + ' href="' + url("project-list/index.html") + '">Project List</a><a' + activeClass("business") + ' href="' + url("corporate-training/locations/index.html") + '">Business Services</a><a' + activeClass("about") + ' href="' + url("about/about-london-institute-of-business-and-technology/index.html") + '">About</a><a' + activeClass("contact") + ' href="' + url("contact-us/index.html") + '">Contact</a></div>',
      "</nav></header></div>"
    ].join("");
  }

  function footerHtml() {
    var socialLinks = '<div class="ukec-social-links" style="display:flex;gap:12px;align-items:center;margin:12px 0 14px;"><a href="https://www.youtube.com/@UKECAcademy" target="_blank" rel="noopener noreferrer" aria-label="UKEC on YouTube" style="display:inline-flex;width:34px;height:34px;border-radius:50%;align-items:center;justify-content:center;background:rgba(255,255,255,.12);color:#fff;text-decoration:none;"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z"/></svg></a><a href="https://www.facebook.com/profile.php?id=61579260583667" target="_blank" rel="noopener noreferrer" aria-label="UKEC on Facebook" style="display:inline-flex;width:34px;height:34px;border-radius:50%;align-items:center;justify-content:center;background:rgba(255,255,255,.12);color:#fff;text-decoration:none;"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.5h-2.9V24c5.8-.9 10.2-5.9 10.2-11.9Z"/></svg></a><a href="https://x.com/ukecacademy?s=11" target="_blank" rel="noopener noreferrer" aria-label="UKEC on X" style="display:inline-flex;width:34px;height:34px;border-radius:50%;align-items:center;justify-content:center;background:rgba(255,255,255,.12);color:#fff;text-decoration:none;"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M18.9 2h3.7l-8.1 9.2L24 22h-7.4l-5.8-7.6L4.2 22H.5l8.7-9.9L0 2h7.6l5.2 6.9L18.9 2Zm-1.3 18.1h2L6.5 3.8H4.3l13.3 16.3Z"/></svg></a></div>';
    return [
      '<footer class="ukec-site-footer">',
      '<div class="ukec-footer-shell"><div class="ukec-footer-grid">',
      '<div><img src="' + url("assets/cdn.prod.website-files.com/5f0da8fd320acd2df8b13eb1/63ff59fb0b01cb563976beda_LIBT_Main_Logo_White.png") + '" loading="lazy" width="150" alt="UKEC logo" class="ukec-footer-logo"/><p class="ukec-footer-text">United Kingdom Education Centre (UKEC) is the exclusive authorised agency for London Institute of Business and Technology in the Asia-Pacific region.</p></div>',
      '<div><div class="ukec-footer-title">UKEC Services</div><div class="ukec-footer-links"><span>Student enquiries</span><span>Application guidance</span><span>Partner coordination</span><span>Corporate training enquiries</span></div></div>',
      '<div><div class="ukec-footer-title">Useful Links</div><div class="ukec-footer-links"><a href="' + url("courses/all-courses/index.html") + '">Explore LIBT Courses</a><a href="' + url("project-list/index.html") + '">Project List</a><a href="' + url("corporate-training/locations/index.html") + '">Business Services</a><a href="' + url("about/about-london-institute-of-business-and-technology/index.html") + '">About UKEC</a><a href="' + url("contact-us/index.html") + '">Contact UKEC</a><a href="https://www.libt.co.uk/" target="_blank" rel="noopener">LIBT Official Website</a></div></div>',
      '<div><div class="ukec-footer-title">Contact</div><div class="ukec-footer-contact"><div><strong>Email</strong><a href="mailto:virgina@globalukedu.com">virgina@globalukedu.com</a></div><div><strong>Phone</strong><a href="tel:+447591236179">+44 7591 236179</a></div><div><strong>Hong Kong Office</strong>RM 401, 4/F., Wanchai Central Building, 89 Lockhart Road, Wan Chai, Hong Kong</div></div>' + socialLinks + '</div>',
      '</div><div class="ukec-footer-note"><div>Copyright 2017 - <span id="currentYear">2023</span> - UKEC - United Kingdom Education Centre</div><div>Asia-Pacific representative agency for LIBT. Programme details remain subject to LIBT confirmation.</div></div></div>',
      "</footer>"
    ].join("");
  }

  function replaceHeader() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = headerHtml();
    var header = wrapper.firstChild;
    var oldHeader = document.querySelector(".megamnenu");
    if (oldHeader) {
      oldHeader.replaceWith(header);
    } else {
      document.body.insertBefore(header, document.body.firstChild);
    }
    document.querySelectorAll("header.header-nav,.navbar-no-shadow").forEach(function (node) {
      node.remove();
    });
    var toggle = header.querySelector(".ukec-site-toggle");
    var menu = header.querySelector(".ukec-site-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    }
  }

  function replaceFooter() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = footerHtml();
    var footer = wrapper.firstChild;
    var existing = document.querySelector(".ukec-footer-clean,.ukec-site-footer,.lnd_footer.nohover");
    if (existing) {
      var next = existing.nextElementSibling;
      existing.replaceWith(footer);
      while (next && next.tagName !== "SCRIPT") {
        var current = next;
        next = next.nextElementSibling;
        current.remove();
      }
    } else {
      var firstScript = document.querySelector("script");
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(footer, firstScript);
      } else {
        document.body.appendChild(footer);
      }
    }
  }

  function isBusinessServicesPage() {
    return window.location.pathname.indexOf("/corporate-training/locations/") !== -1;
  }

  function isAboutUKECPage() {
    return window.location.pathname.indexOf("/about/about-london-institute-of-business-and-technology/") !== -1;
  }

  function setMetaContent(selector, value) {
    var node = document.querySelector(selector);
    if (node) node.setAttribute("content", value);
  }

  function updateBusinessServicesMeta() {
    var title = "Business Services and Project Cooperation | UKEC";
    var description = "UKEC is the exclusive Asia-Pacific general representative for London Institute of Business and Technology (LIBT), supporting regional learners, partners, and education institutions with project cooperation opportunities.";
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }

  function updateAboutUKECMeta() {
    var title = "About UKEC | LIBT Asia-Pacific Representative";
    var description = "Learn about United Kingdom Education Centre (UKEC), the exclusive Asia-Pacific authorised agency and regional representative for London Institute of Business and Technology (LIBT).";
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }

  function businessServicesPageHtml() {
    return [
      '<main class="ukec-partner-page">',
      '<section class="ukec-partner-hero" aria-label="UKEC business services and education partnerships">',
      '<div class="ukec-partner-shell ukec-partner-hero-grid">',
      '<div><div class="ukec-partner-eyebrow"><span></span>LIBT Asia-Pacific General Representative</div>',
      '<h1>Education partnerships, regional access, and LIBT project cooperation.</h1>',
      '<p>United Kingdom Education Centre (UKEC) is the exclusive authorised agency and Asia-Pacific general representative for London Institute of Business and Technology (LIBT). We support learners, regional partners, and education institutions that want to build credible UK-focused study and professional learning pathways.</p>',
      '<div class="ukec-partner-actions"><a class="ukec-partner-btn primary" href="' + url("contact-us/index.html") + '">Start a Partnership Conversation</a><a class="ukec-partner-btn secondary" href="' + url("courses/all-courses/index.html") + '">Explore LIBT Courses</a></div></div>',
      '<aside class="ukec-partner-proof"><div class="ukec-partner-proof-title">What this page is for</div><div class="ukec-partner-proof-large">A direct regional contact point for cooperation.</div><div class="ukec-partner-proof-list"><div><strong>For LIBT enquiries</strong>Asia-Pacific student recruitment, application support, and partner communication.</div><div><strong>For institutions</strong>Open conversations with colleges, schools, training providers, and education service organisations.</div><div><strong>For organisations</strong>Professional learning, corporate training, and talent development project discussions.</div></div></aside>',
      '</div></section>',
      '<section class="ukec-partner-strip"><div class="ukec-partner-shell ukec-partner-strip-grid"><div class="ukec-partner-stat"><strong>APAC</strong><span>Regional representation and partner coordination.</span></div><div class="ukec-partner-stat"><strong>LIBT</strong><span>Exclusive authorised agency relationship for the region.</span></div><div class="ukec-partner-stat"><strong>Open</strong><span>Project cooperation with qualified education institutions.</span></div><div class="ukec-partner-stat"><strong>Local</strong><span>Communication support across Asia-Pacific time zones.</span></div></div></section>',
      '<section class="ukec-partner-section white"><div class="ukec-partner-shell ukec-partner-split"><div class="ukec-partner-media agency" aria-hidden="true"></div><div><div class="ukec-partner-label">Our role</div><h2 class="ukec-partner-h2">UKEC helps make LIBT programmes clearer, closer, and easier to access across Asia-Pacific.</h2><p class="ukec-partner-lede">We are not simply listing training locations. This page is the cooperation entry point for regional partners who need a structured way to connect students, institutions, and organisations with LIBT pathways.</p><div class="ukec-partner-feature-list"><div class="ukec-partner-feature"><b>01</b><div><h3>Regional admissions coordination</h3><p>Initial enquiry handling, document preparation guidance, programme matching, and communication before formal submission.</p></div></div><div class="ukec-partner-feature"><b>02</b><div><h3>Partner channel development</h3><p>Support for schools, colleges, agencies, and institutions that want a responsible regional route into LIBT opportunities.</p></div></div><div class="ukec-partner-feature"><b>03</b><div><h3>Project and training cooperation</h3><p>Discussion support for corporate learning, professional development, short courses, and institution-led education projects.</p></div></div></div></div></div></section>',
      '<section class="ukec-partner-section"><div class="ukec-partner-shell"><div class="ukec-partner-label">Cooperation models</div><h2 class="ukec-partner-h2">Ways education institutions can work with UKEC.</h2><p class="ukec-partner-lede">We welcome serious project conversations with partners who can support quality learner engagement, local delivery readiness, student services, or market access.</p><div class="ukec-partner-card-grid"><div class="ukec-partner-card"><div class="ukec-partner-card-img"></div><div class="ukec-partner-card-body"><h3>Student progression channels</h3><p>Build enquiry and progression routes for students interested in LIBT-linked diploma, top-up, postgraduate, and professional pathways.</p></div></div><div class="ukec-partner-card"><div class="ukec-partner-card-img"></div><div class="ukec-partner-card-body"><h3>Institutional project cooperation</h3><p>Discuss co-branded information sessions, pathway briefings, regional recruitment plans, and programme positioning.</p></div></div><div class="ukec-partner-card"><div class="ukec-partner-card-img"></div><div class="ukec-partner-card-body"><h3>Corporate training enquiries</h3><p>Coordinate professional learning needs from companies, industry associations, and employer-sponsored learner groups.</p></div></div><div class="ukec-partner-card"><div class="ukec-partner-card-img"></div><div class="ukec-partner-card-body"><h3>Local learner support</h3><p>Work with partners who can provide reliable consultation, document collection, language support, and learner follow-up.</p></div></div><div class="ukec-partner-card"><div class="ukec-partner-card-img"></div><div class="ukec-partner-card-body"><h3>Regional market development</h3><p>Share market insights, channel feedback, and local demand signals to help position programmes responsibly.</p></div></div><div class="ukec-partner-card"><div class="ukec-partner-card-img"></div><div class="ukec-partner-card-body"><h3>Event and seminar collaboration</h3><p>Host online or offline briefings for students, parents, counsellors, institutions, and corporate learning teams.</p></div></div></div></div></section>',
      '<section class="ukec-partner-band"><div class="ukec-partner-shell ukec-partner-band-grid"><div><div class="ukec-partner-label">Open to partners</div><h2 class="ukec-partner-h2">We are looking for education organisations with real learner access and long-term standards.</h2><p class="ukec-partner-lede">A useful partnership needs more than traffic. UKEC prioritises partners who can communicate accurately, protect student interests, and maintain a professional cooperation process.</p></div><div class="ukec-partner-audience"><div>Colleges and schools</div><div>Education agencies</div><div>Training providers</div><div>Corporate learning teams</div><div>Pathway operators</div><div>Regional institutions</div></div></div></section>',
      '<section class="ukec-partner-section white"><div class="ukec-partner-shell"><div class="ukec-partner-label">Process</div><h2 class="ukec-partner-h2">A simple cooperation path before any formal commitment.</h2><p class="ukec-partner-lede">We start with fit and responsibility first, then move into programme mapping and a practical cooperation plan.</p><div class="ukec-partner-process"><div class="ukec-partner-step"><b>1</b><h3>Initial discussion</h3><p>Share your organisation profile, region, learner base, and the type of cooperation you want to explore.</p></div><div class="ukec-partner-step"><b>2</b><h3>Fit mapping</h3><p>UKEC reviews whether LIBT-related pathways or professional projects match your audience and service capacity.</p></div><div class="ukec-partner-step"><b>3</b><h3>Project proposal</h3><p>We define the programme focus, communication responsibilities, lead handling, and operational expectations.</p></div><div class="ukec-partner-step"><b>4</b><h3>Launch support</h3><p>Approved cooperation can move into briefings, materials coordination, enquiry handling, and ongoing partner support.</p></div></div></div></section>',
      '<section class="ukec-partner-section dark"><div class="ukec-partner-shell ukec-partner-split"><div><div class="ukec-partner-label">Partner standards</div><h2 class="ukec-partner-h2">Accuracy, transparency, and student-first communication.</h2><p class="ukec-partner-lede">All programme information, admissions details, and project commitments must remain aligned with LIBT confirmation. UKEC supports regional partners, but we do not encourage over-promising, misleading promotion, or unclear learner expectations.</p></div><div class="ukec-partner-media institutions" aria-hidden="true"></div></div></section>',
      '<section class="ukec-partner-cta"><div class="ukec-partner-shell"><div class="ukec-partner-cta-box"><div><div class="ukec-partner-label">Next step</div><h2 class="ukec-partner-h2">Tell us what kind of cooperation you want to build.</h2><p class="ukec-partner-lede">Send your organisation background, target market, learner profile, and preferred cooperation model. UKEC will help assess whether there is a suitable path forward.</p><div class="ukec-partner-contact"><span><strong>Email:</strong> virgina@globalukedu.com</span><span><strong>Phone:</strong> +44 7591 236179</span></div></div><div class="ukec-partner-actions"><a class="ukec-partner-btn primary" href="mailto:virgina@globalukedu.com">Email UKEC</a><a class="ukec-partner-btn secondary" style="color:#10233f;border-color:#cbd3df;background:#fff" href="' + url("contact-us/index.html") + '">Contact Page</a></div></div></div></section>',
      '</main>'
    ].join("");
  }

  function aboutUKECPageHtml() {
    return [
      '<main class="ukec-about-page">',
      '<section class="ukec-about-hero" aria-label="About United Kingdom Education Centre">',
      '<div class="ukec-about-shell ukec-about-hero-grid">',
      '<div><div class="ukec-about-kicker"><span></span>About United Kingdom Education Centre</div>',
      '<h1>UKEC is the Asia-Pacific gateway for LIBT learners and partners.</h1>',
      '<p class="ukec-about-intro">United Kingdom Education Centre (UKEC) is the exclusive authorised agency and Asia-Pacific general representative for London Institute of Business and Technology (LIBT). Our role is to help regional students, families, education organisations, and corporate partners understand the right next step.</p>',
      '<div class="ukec-about-actions"><a class="ukec-about-btn primary" href="' + url("contact-us/index.html") + '">Contact UKEC</a><a class="ukec-about-btn secondary" href="' + url("courses/all-courses/index.html") + '">Explore Courses</a></div></div>',
      '<aside class="ukec-about-identity"><div class="ukec-about-identity-img" aria-hidden="true"></div><div class="ukec-about-identity-body"><strong>Regional representative</strong><p>UKEC supports Asia-Pacific enquiries and cooperation while LIBT remains the academic institution responsible for official programme confirmation.</p></div></aside>',
      '</div></section>',
      '<section class="ukec-about-facts"><div class="ukec-about-fact"><strong>UKEC</strong><span>United Kingdom Education Centre</span></div><div class="ukec-about-fact"><strong>LIBT</strong><span>London Institute of Business and Technology</span></div><div class="ukec-about-fact"><strong>APAC</strong><span>Regional focus for learners and partners</span></div><div class="ukec-about-fact"><strong>HK</strong><span>Hong Kong regional contact point</span></div></section>',
      '<section class="ukec-about-section white"><div class="ukec-about-shell ukec-about-split"><div><div class="ukec-about-label">Our role</div><h2 class="ukec-about-h2">A regional team built for clarity before application or cooperation.</h2><p class="ukec-about-lede">UKEC helps visitors understand what can be handled locally and what must be confirmed by LIBT. That distinction keeps student expectations clear and gives partner organisations a more responsible cooperation route.</p></div><div class="ukec-about-panel"><div class="ukec-about-list"><div class="ukec-about-row"><b>01</b><div><h3>Student guidance</h3><p>We help prospective learners compare suitable routes, prepare initial documents, and ask better programme questions.</p></div></div><div class="ukec-about-row"><b>02</b><div><h3>Partner coordination</h3><p>We work with regional institutions, agencies, and education groups that need a clear access point for LIBT-related opportunities.</p></div></div><div class="ukec-about-row"><b>03</b><div><h3>Local communication</h3><p>We support Asia-Pacific time zones, market context, and practical communication before formal handoff or confirmation.</p></div></div></div></div></div></section>',
      '<section class="ukec-about-section"><div class="ukec-about-shell"><div class="ukec-about-label">What UKEC does</div><h2 class="ukec-about-h2">Focused support for the first decisions learners and partners need to make.</h2><p class="ukec-about-lede">This page is about UKEC, not a duplicate of LIBT. The goal is to make our regional function easy to understand.</p><div class="ukec-about-grid"><div class="ukec-about-card"><h3>Course direction</h3><p>Identify relevant LIBT-linked study options based on background, target qualification, and timing.</p></div><div class="ukec-about-card"><h3>Application readiness</h3><p>Explain basic requirements and help applicants organise initial documents before formal submission.</p></div><div class="ukec-about-card"><h3>Partner enquiries</h3><p>Route institutions and agencies into appropriate cooperation conversations with UKEC.</p></div><div class="ukec-about-card"><h3>Corporate learning</h3><p>Coordinate early-stage professional learning and business service conversations for organisations.</p></div><div class="ukec-about-card"><h3>Information sessions</h3><p>Support regional briefings for students, parents, counsellors, and partner teams.</p></div><div class="ukec-about-card"><h3>Responsible messaging</h3><p>Keep public communication aligned with LIBT confirmation and avoid unclear promises.</p></div></div></div></section>',
      '<section class="ukec-about-band"><div class="ukec-about-shell ukec-about-band-grid"><div><div class="ukec-about-label">Relationship with LIBT</div><h2 class="ukec-about-h2">UKEC opens the regional door; LIBT remains the academic authority.</h2><p class="ukec-about-lede">UKEC supports enquiry, preparation, and communication in Asia-Pacific. Admissions outcomes, programme delivery, academic policy, and official programme details remain subject to LIBT confirmation.</p></div><div class="ukec-about-tags"><div>Regional enquiries</div><div>Document guidance</div><div>Partner channels</div><div>Institutional cooperation</div><div>Corporate learning</div><div>Information events</div></div></div></section>',
      '<section class="ukec-about-section white"><div class="ukec-about-shell ukec-about-split"><div class="ukec-about-panel dark"><div class="ukec-about-label">How we work</div><h2 class="ukec-about-h2">Clear, practical, and student-aware.</h2><p class="ukec-about-lede">We prefer straightforward guidance, documented next steps, and transparent communication with learners and partner organisations.</p></div><div class="ukec-about-panel"><div class="ukec-about-list"><div class="ukec-about-row"><b>A</b><div><h3>Start with fit</h3><p>We look at background, goals, timeline, and preferred pathway before suggesting the next step.</p></div></div><div class="ukec-about-row"><b>B</b><div><h3>Keep responsibilities visible</h3><p>Visitors should know what UKEC can support and what requires LIBT&apos;s formal confirmation.</p></div></div><div class="ukec-about-row"><b>C</b><div><h3>Build long-term cooperation</h3><p>For institutions, we focus on reliable service quality rather than short-term promotion.</p></div></div></div></div></div></section>',
      '<section class="ukec-about-cta"><div class="ukec-about-shell"><div class="ukec-about-cta-box"><div><div class="ukec-about-label">Talk to UKEC</div><h2 class="ukec-about-h2">Start with your goal, background, or cooperation idea.</h2><p class="ukec-about-lede">Students can send their study background and target qualification. Institutions can share their organisation profile and the type of cooperation they want to explore.</p><div class="ukec-about-contact"><span><strong>Email:</strong> virgina@globalukedu.com</span><span><strong>Phone:</strong> +44 7591 236179</span></div></div><div class="ukec-about-actions"><a class="ukec-about-btn primary" href="mailto:virgina@globalukedu.com">Email UKEC</a><a class="ukec-about-btn secondary" href="' + url("corporate-training/locations/index.html") + '">Business Services</a></div></div></div></section>',
      '</main>'
    ].join("");
  }

  function replacePageFromOldHero(page, oldHero, footer) {
    if (oldHero && oldHero.parentNode) {
      oldHero.parentNode.insertBefore(page, oldHero);
      var node = oldHero;
      while (node && node !== footer && node.tagName !== "SCRIPT") {
        var current = node;
        node = node.nextElementSibling;
        current.remove();
      }
    } else if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(page, footer);
    } else {
      var firstScript = document.querySelector("script");
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(page, firstScript);
      } else {
        document.body.appendChild(page);
      }
    }
  }

  function replaceBusinessServicesPage() {
    if (!isBusinessServicesPage() || document.querySelector(".ukec-partner-page")) return;
    updateBusinessServicesMeta();

    var wrapper = document.createElement("div");
    wrapper.innerHTML = businessServicesPageHtml();
    var page = wrapper.firstChild;
    var footer = document.querySelector(".ukec-site-footer");
    var oldHero = document.querySelector(".full_with_bg.ctl");
    replacePageFromOldHero(page, oldHero, footer);
  }

  function replaceAboutUKECPage() {
    if (!isAboutUKECPage() || document.querySelector(".ukec-about-page")) return;
    updateAboutUKECMeta();

    var wrapper = document.createElement("div");
    wrapper.innerHTML = aboutUKECPageHtml();
    var page = wrapper.firstChild;
    var footer = document.querySelector(".ukec-site-footer");
    var oldHero = document.querySelector(".full_with_bg.aboutus");
    replacePageFromOldHero(page, oldHero, footer);
    document.querySelectorAll(".oldaboutcontent,.hidden-div").forEach(function (node) {
      node.remove();
    });
  }

  function applyLayout() {
    try {
      addStyle();
      replaceHeader();
      replaceFooter();
      replaceBusinessServicesPage();
      replaceAboutUKECPage();
    } finally {
      document.documentElement.classList.add("ukec-layout-ready");
    }
  }

  if (document.body) {
    applyLayout();
  } else {
    ready(applyLayout);
  }
})();
