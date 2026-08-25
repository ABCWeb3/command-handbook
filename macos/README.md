# أوامر macOS

سيضم هذا القسم أوامر Terminal الخاصة بـ macOS، مع توضيح الفرق بينها وبين Linux عند الحاجة.

## بداية سريعة

إصدار macOS:

```bash
sw_vers
```

عرض إعدادات واجهات الشبكة:

```bash
ifconfig
```

عرض البوابة الافتراضية:

```bash
route -n get default
```

اختبار منفذ TCP:

```bash
nc -vz 192.168.1.190 5000
```
