# الشبكات وتشخيصها في macOS

## منافذ الشبكة وأسماء الواجهات

```bash
networksetup -listallhardwareports
```

## عنوان IP والبوابة الافتراضية

```bash
ipconfig getifaddr en0
```

```bash
route -n get default
```

غيّر `en0` إذا كان اسم واجهتك مختلفاً.

## اختبار الاتصال وDNS

```bash
ping -c 4 192.168.1.1
```

```bash
dig @192.168.1.50 example.com
```

## DNS المستخدم وتتبع المسار

```bash
scutil --dns
```

```bash
traceroute example.com
```

## اختبار منفذ والمنافذ المستمعة

```bash
nc -vz 192.168.1.190 5000
```

```bash
lsof -nP -iTCP -sTCP:LISTEN
```

## مسح ذاكرة DNS

```bash
sudo dscacheutil -flushcache
```

```bash
sudo killall -HUP mDNSResponder
```
