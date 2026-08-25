# الأمان والفحوص المحلية في macOS

> [!IMPORTANT]
> افحص أجهزتك وشبكاتك فقط، أو الأنظمة التي لديك تصريح صريح لاختبارها.

## المستخدم ومجموعاته

```bash
id
```

## تجزئة SHA-256

```bash
shasum -a 256 downloaded-file.dmg
```

## توقيع التطبيق وتقييم Gatekeeper

```bash
codesign -dv --verbose=4 "/Applications/App Name.app"
```

```bash
spctl --assess --type execute --verbose "/Applications/App Name.app"
```

لا تتجاوز تحذير Gatekeeper قبل التأكد من المصدر والتوقيع.

## FileVault وجدار الحماية

```bash
fdesetup status
```

```bash
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate
```

## المنافذ والاتصالات

```bash
lsof -nP -iTCP -sTCP:LISTEN
```

```bash
lsof -nP -iTCP -sTCP:ESTABLISHED
```
