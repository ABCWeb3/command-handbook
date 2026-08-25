# الأقراص والتخزين في Windows

## الأقراص والأقسام ووحدات التخزين

```powershell
Get-Disk
```

```powershell
Get-Partition
```

```powershell
Get-Volume
```

## المساحة المتاحة

```powershell
Get-PSDrive -PSProvider FileSystem
```

## معلومات قرص فعلية

```powershell
Get-PhysicalDisk
```

## أكبر الملفات في مجلد

```powershell
Get-ChildItem -Path . -Recurse -File | Sort-Object Length -Descending | Select-Object -First 20 FullName, Length
```

> [!CAUTION]
> تهيئة الأقراص أو تغيير الأقسام قد يمحو البيانات؛ تحقق من رقم القرص وأنشئ نسخة احتياطية.
