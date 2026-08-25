# الأرشفة والضغط في macOS

## ZIP

```bash
ditto -c -k --sequesterRsrc --keepParent directory archive.zip
```

```bash
ditto -x -k archive.zip destination
```

## tar.gz

```bash
tar -czf archive.tar.gz directory/
```

```bash
tar -xzf archive.tar.gz
```

## صورة قرص DMG من مجلد

```bash
hdiutil create -srcfolder directory -volname "Archive" archive.dmg
```

> [!CAUTION]
> لا تفتح تطبيقاً من أرشيف غير موثوق قبل التحقق من مصدره وتوقيعه.
