# الأرشفة والضغط في Windows

## إنشاء ZIP

```powershell
Compress-Archive -Path ".\directory\*" -DestinationPath ".\archive.zip"
```

## فك ZIP

```powershell
Expand-Archive -Path ".\archive.zip" -DestinationPath ".\destination"
```

## tar المدمج

```powershell
tar -czf archive.tar.gz directory
```

```powershell
tar -xzf archive.tar.gz
```

> [!CAUTION]
> افحص مصدر الأرشيف ومحتواه قبل فتح الملفات التنفيذية بداخله.
