with open(r"d:\git\exult-master\tools\ucxt\output\zh_script\batch_20\084F_zh.es", "r", encoding="utf-8") as f:
    content = f.read()

long_str = '儀式開始了，Batlin 站在 Britain 兄弟會聚集的成員面前。他開始佈道。「我的朋友們，我最初創立兄弟會是為了幫助 Britannia 及其人民為未來做好準備。今天，它過去最偉大的象徵之一來到了這裡，加入了我們的兄弟會。這是偉大的一天，因為當我們的過去和現在交織在一起時，我們將發出一個響徹整個 Britannia 的訊息。很快地，它所有的人民將會為團結而共同奮鬥。」人群爆發出熱烈的歡呼聲。「當他們聽到聖者成為兄弟會的一員時，那些最初不信任我們的人將會看到我們宗旨的真相。那麼我們就可以迎來這樣一天：整個 Britannia 都配得上它將獲得的豐厚回報。」'
split_str = '儀式開始了，Batlin 站在 Britain 兄弟會聚集的成員面前。他開始佈道。「我的朋友們，我最初創立兄弟會是為了幫助 Britannia 及其人民為未來做好準備。");\n\tmessage("今天，它過去最偉大的象徵之一來到了這裡，加入了我們的兄弟會。這是偉大的一天，因為當我們的過去和現在交織在一起時，我們將發出一個響徹整個 Britannia 的訊息。");\n\tmessage("很快地，它所有的人民將會為團結而共同奮鬥。」人群爆發出熱烈的歡呼聲。「當他們聽到聖者成為兄弟會的一員時，那些最初不信任我們的人將會看到我們宗旨的真相。");\n\tmessage("那麼我們就可以迎來這樣一天：整個 Britannia 都配得上它將獲得的豐厚回報。」'

content = content.replace(long_str, split_str)

with open(r"d:\git\exult-master\tools\ucxt\output\zh_script\batch_20\084F_zh.es", "w", encoding="utf-8") as f:
    f.write(content)
print("Split 084F string.")
