# إدارة البرامج في Windows

## البحث والتثبيت عبر winget

```powershell
winget search package-name
```

```powershell
winget install --id Publisher.Package
```

## عرض البرامج والتحديثات

```powershell
winget list
```

```powershell
winget upgrade
```

```powershell
winget upgrade --id Publisher.Package
```

## إزالة برنامج

```powershell
winget uninstall --id Publisher.Package
```

> [!IMPORTANT]
> راجع اسم الناشر والمعرّف قبل تثبيت برنامج أو تحديثه.
