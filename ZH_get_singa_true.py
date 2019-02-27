# -*- coding utf-8 -*-
import hmac, execjs, time, os, requests, json, base64, re, urllib.parse
from io import BytesIO

from PIL import Image

os.environ["EXECJS_RUNTIME"] = "Node"
__author__ = 'xiaxichen'
IMAGE_LIST = [[17, 25.1875], [44, 28.1875], [69, 28.1875], [93, 25.1875], [109, 28.1875], [140, 26.1875],
              [177, 13.1875]]


def get_js(js_location):
    f = open(js_location, 'r', encoding='UTF-8')
    line = f.readline()
    htmlstr = ''
    while line:
        htmlstr = htmlstr + line
        line = f.readline()
    return htmlstr


def get_singa_true(timestamp):
    sha1 = hmac.new("d1b964811afb40118a12068ff74a12f4".encode('utf8'), digestmod='sha1')
    sha1.update("password".encode('utf8'))
    sha1.update("c3cef7c66a1843f8b3a9e6a1e3160e20".encode('utf8'))
    sha1.update("com.zhihu.web".encode('utf8'))
    sha1.update(str(timestamp).encode('utf8'))
    return sha1.hexdigest()


def get_encrypt(ctx, all_args):
    return ctx.call('get_encrypt', all_args)


def get_image_addr(img_str):
    if "，" in img_str:
        img_str = img_str.replace("，", ",")
    img_list = img_str.split(",")
    captcha = {"img_size": [200, 44], "input_points": []}
    for i in img_list:
        captcha['input_points'].append(IMAGE_LIST[int(i) - 1])
    return captcha


def get_cookie(cookie):
    new_cookie = {}
    for line in cookie.split(';'):
        try:
            key, value = line.split('=', 1)
            new_cookie[key] = value
        except Exception as e:
            print(e)
    return new_cookie


def set_cookie(cookie, new_cookie):
    for k, v in new_cookie.items():
        cookie[k] = v
    return cookie


if __name__ == '__main__':
    user_name = urllib.parse.quote("+86" + input("输入手机号"))
    password = urllib.parse.quote(input("用户密码"))
    session = requests.session()
    headers = {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
    }
    url = "https://www.zhihu.com"
    response = session.get(url, headers=headers)
    print(response.status_code)
    url = "https://www.zhihu.com/api/v3/oauth/captcha?lang=cn"
    headers = {
        "Referer": "https://www.zhihu.com/signup?next=%2F",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
        "x-requested-with": "fetch",
    }
    response = session.get(url, headers=headers)
    print(response.text)
    response = session.put(url, headers=headers)
    print(response.status_code)
    content = json.loads(response.content.decode())
    image = Image.open(BytesIO(base64.b64decode(content['img_base64'])))
    image.show()
    captcha = input("请输入图片验证码 如果为倒立图片请输入第几个文字以,为间隔(输入数字)")
    image.close()
    captcha = get_image_addr(captcha)
    captcha = urllib.parse.quote(json.dumps(captcha).replace(" ", ""))
    url = "https://www.zhihu.com/api/v3/oauth/captcha?lang=cn"
    headers = {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
    }
    response = session.post(url, headers=headers, data={"input_text": captcha})
    print(response.text)
    timestamp = int(time.time() * 1000)
    singa_true = get_singa_true(time.time() * 1000)
    print(singa_true)
    all_args = 'client_id=c3cef7c66a1843f8b3a9e6a1e3160e20&grant_type=password&timestamp=%(timestamp)s&source=com.zhihu.web&signature=%(singa_true)s&username=%(user_name)s&password=%(pass_word)s&captcha=%(captcha)s&lang=en&ref_source=homepage&utm_source=' % {
        "timestamp": timestamp, "singa_true": singa_true, "user_name": user_name, "pass_word": password,
        "captcha": captcha}
    print(all_args)
    ctx = execjs.compile(get_js('mix.js'))
    post_ctx = get_encrypt(ctx, all_args)
    print(post_ctx)
    new_cookie = {}
    new_cookie["tgw_l7_route"] = session.cookies.get("tgw_l7_route")
    new_cookie["_xsrf"] = session.cookies.get("_xsrf")
    new_cookie["capsion_ticket"] = session.cookies.get("capsion_ticket")
    headers = {
        "content-type": "application/x-www-form-urlencoded",
        "cookie": json.dumps(new_cookie),
        "dnt": "1",
        "referer": "https://www.zhihu.com/signup?next=%2F",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
        "x-xsrftoken": new_cookie["_xsrf"],
        "x-ab-param": "li_album_liutongab=0;se_click2=0;zr_infinity=zr_infinity_close;se_config=1;se_qanchor=0;se_topicseed=0;top_new_feed=1;qa_web_answerlist_ad=0;top_brand=1;se_consulting_switch=off;se_correct_ab=0;se_new_market_search=on;soc_special=0;top_ntr=1;se_ios_spb309bugfix=0;se_minor_onebox=d;top_core_session=-1;top_new_user_rec=0;tp_related_topics= a;se_backsearch=0;top_hotcommerce=1;li_se_render=new;top_test_4_liguangyi=1;qa_answerlist_ad=0;se_premium_member=0;se_second_search=1;top_bill=0;top_rank=0;tp_qa_metacard_top=0;soc_zero_follow=0;top_wonderful=1;zr_km_feed_rpm=default;li_ts_sample=old;se_spb309=0;se_wannasearch=0;qa_video_answer_list=0;top_raf=y;top_v_album=1;li_es_new=old;li_gbdt=0;li_lt_tp_score=1;se_ios_spb309=0;se_zu_onebox=0;soc_bigone=0;top_nucc=0;soc_icon=1;tp_related_tps_movie=a;ug_zero_follow=0;se_likebutton=0;se_preset_tech=0;se_regency=0;zr_article_rec_rank=truncate;li_filter_ttl=2;se_ad_index=10;se_webrs=0;top_recall_exp_v2=1;se_click3=1;tp_m_intro_re_topic=0;pf_creator_card=1;se_expired_ob=0;se_km_ad_locate=1;se_sim_boost=0;top_creator_level=0;top_promo=0;top_universalebook=1;top_zh_tailuser=1;zr_ans_rec=gbrank;zr_boost_recall=0;se_major_onebox=major;se_prf=0;se_webtimebox=0;tp_sft=a;zr_art_rec_rank=base;se_p_slideshow=0;se_webmajorob=0;top_video_rerank=-1;se_websearch=3;top_recall_deep_user=1;top_vipswitch=1;pin_efs=orig;se_consulting_price=n;top_reason=1;tp_qa_metacard=1;qa_test=0;top_recall_exp_v1=1;top_source=0;se_billboardsearch=0;top_quality=0;top_round_table=0;ug_follow_answerer=0;top_hotlist=1;tp_discussion_feed_type_android=2;zr_km_material_buy=2;top_billupdate1=2;top_ebook=0;top_root=0;top_sess_diversity=-1;tp_sticky_android=0;pf_newguide_vertical=0;se_roundtable=0;se_sensitive=0;se_zu_recommend=0;top_hkc_test=1;top_native_answer=1;top_vipconsume=1;se_auto_syn=0;se_search_feed=N;zr_video_rec=zr_video_rec:base;gw_guide=0;se_entity=on;se_new_boost=0;tp_header_style=0;top_ydyq=X;zr_rel_search=base",
        "x-zse-83": "3_1.1",
    }
    url = "https://www.zhihu.com/api/v3/oauth/sign_in"
    response = requests.post(url, headers=headers, data=post_ctx)
    text = json.loads(response.text)
    print(response.status_code)
    print(text)
