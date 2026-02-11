# Refonte du Page-Layout - Thème Disney

## Progression

| Section | Status |
|---------|--------|
| CSS - Couleurs Disney | ✅ Fait |
| Header - Structure de base | ✅ Fait |
| Header - Logo avec animation | ✅ Fait |
| Header - Barre de recherche stylisée | ✅ Fait |
| Header - Navigation Desktop avec icônes | ✅ Fait |
| Header - Menu utilisateur Desktop | ✅ Fait |
| Header - Menu mobile | ⏳ À faire |
| Header - Formulaire de connexion (visiteurs) | ⏳ À faire |
| Backend - Recherche de membres | ⏳ À faire |
| Page-Layout - Overlay (optionnel) | ⏳ À faire |

---

## Résumé des modifications planifiées

### 1. CSS - Couleurs Disney (app.css)

Les couleurs Disney ont été ajoutées dans `:root` :

```css
/* Disney theme colors */
--disney-blue-dark: oklch(0.35 0.2 250);
--disney-blue: oklch(0.5 0.22 250);
--disney-blue-light: oklch(0.65 0.18 250);
--disney-gold: oklch(0.8 0.15 85);
--disney-gold-dark: oklch(0.65 0.18 85);
```

Et dans `@theme` pour Tailwind :

```css
/* Disney theme */
--color-disney-blue-dark: var(--disney-blue-dark);
--color-disney-blue: var(--disney-blue);
--color-disney-blue-light: var(--disney-blue-light);
--color-disney-gold: var(--disney-gold);
--color-disney-gold-dark: var(--disney-gold-dark);
```

**Status:** ✅ Déjà appliqué

---

### 2. Header - Refonte visuelle (header.tsx)

#### Imports à ajouter :
```tsx
import { Home, LayoutDashboard, LogOut, Menu, Search, User, Users, LoaderCircle } from 'lucide-react';
```
**Status:** ✅ Fait

#### Structure du header amélioré :

```tsx
<header className="sticky top-0 z-50 border-b border-white/10 bg-linear-to-r from-disney-blue-dark via-disney-blue to-disney-blue-light shadow-lg backdrop-blur-sm">
```
**Status:** ✅ Fait

#### Logo avec animation :
```tsx
<Link href={home()} className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105">
    <div className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg group-hover:shadow-disney-gold/20">
        <AppLogoIcon className="h-8 w-8 text-white drop-shadow-md" />
    </div>
    <span className="hidden font-montserrat text-xl font-bold tracking-wide text-white drop-shadow-md md:block">
        Disneyphile
    </span>
</Link>
```
**Status:** ✅ Fait

#### Barre de recherche stylisée :
```tsx
<Form action={members.index().url} method="get" className="relative hidden max-w-md flex-1 md:flex">
    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-disney-blue-dark/60" />
    <Input
        type="search"
        name="search"
        placeholder="Rechercher des membres..."
        className="h-10 w-full rounded-full border-white/20 bg-white/95 pl-10 pr-4 shadow-inner transition-all duration-200 placeholder:text-disney-blue-dark/50 focus:border-disney-gold focus:bg-white focus:ring-disney-gold/30"
    />
</Form>
```
**Status:** ✅ Fait

#### Navigation Desktop avec icônes :
```tsx
<nav className="hidden items-center gap-1 lg:flex">
    <NavLink href={home()} icon={<Home className="h-4 w-4" />} label="Accueil" />
    <NavLink href={dashboard()} icon={<LayoutDashboard className="h-4 w-4" />} label="Tableau de bord" />
    <NavLink href={members.show({ slug: auth.user.slug })} icon={<User className="h-4 w-4" />} label="Profil" />
</nav>

// Composant NavLink
const NavLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <Link
        href={href}
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white"
    >
        {icon}
        <span className="hidden xl:inline">{label}</span>
    </Link>
);
```
**Status:** ✅ Fait

#### Menu utilisateur Desktop :
```tsx
<DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button
            variant="ghost"
            className="hidden h-9 gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-white backdrop-blur-sm transition-all duration-200 hover:border-disney-gold/50 hover:bg-white/20 hover:text-white lg:flex"
        >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-disney-gold text-xs font-bold text-disney-blue-dark">
                {auth.user.name.charAt(0).toUpperCase()}
            </div>
            <span className="max-w-24 truncate text-sm">{auth.user.name}</span>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56 border-disney-blue/20 bg-white/95 backdrop-blur-md">
        <div className="px-3 py-2">
            <p className="text-sm font-medium text-disney-blue-dark">{auth.user.name}</p>
            <p className="text-xs text-muted-foreground">{auth.user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
            <Link href={members.show({ slug: auth.user.slug })} className="flex cursor-pointer items-center gap-2">
                <User className="h-4 w-4" />
                Mon profil
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <Link href={dashboard()} className="flex cursor-pointer items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Tableau de bord
            </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
            <Link href={logout()} method="post" className="flex cursor-pointer items-center gap-2 text-red-500 focus:text-red-500">
                <LogOut className="h-4 w-4" />
                Se déconnecter
            </Link>
        </DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
```
**Status:** ✅ Fait

#### Menu mobile :
```tsx
<DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:text-white lg:hidden"
        >
            <Menu className="h-5 w-5" />
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-64 border-disney-blue/20 bg-white/95 backdrop-blur-md">
        {/* Recherche mobile */}
        <div className="p-3 md:hidden">
            <Form action={members.index().url} method="get" className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-disney-blue-dark/60" />
                <Input
                    type="search"
                    name="search"
                    placeholder="Rechercher..."
                    className="h-9 rounded-full border-disney-blue/20 bg-disney-blue-light/10 pl-10"
                />
            </Form>
        </div>
        <DropdownMenuSeparator className="md:hidden" />
        {/* Items du menu avec icônes */}
        <DropdownMenuItem asChild>
            <Link href={home()} className="flex cursor-pointer items-center gap-3 py-2">
                <Home className="h-4 w-4 text-disney-blue" />
                Accueil
            </Link>
        </DropdownMenuItem>
        {/* ... autres items */}
    </DropdownMenuContent>
</DropdownMenu>
```
**Status:** ⏳ À faire

#### Formulaire de connexion (visiteurs) :
```tsx
<Form
    {...login.form}
    onError={() => {
        window.location.href = login().url;
    }}
    className="flex items-center gap-2"
>
    {({ processing }) => (
        <>
            <div className="hidden items-center gap-2 sm:flex">
                <Input
                    type="email"
                    name="email"
                    className="h-9 w-40 rounded-full border-white/20 bg-white/95 text-sm shadow-inner transition-all duration-200 placeholder:text-disney-blue-dark/50 focus:border-disney-gold focus:bg-white md:w-48"
                    placeholder="Email"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    className="h-9 w-32 rounded-full border-white/20 bg-white/95 text-sm shadow-inner transition-all duration-200 placeholder:text-disney-blue-dark/50 focus:border-disney-gold focus:bg-white md:w-40"
                />
            </div>
            <Button
                type="submit"
                disabled={processing}
                className="h-9 rounded-full bg-disney-gold px-4 font-semibold text-disney-blue-dark shadow-md transition-all duration-200 hover:bg-disney-gold-dark hover:shadow-lg disabled:opacity-70"
            >
                {processing ? (
                    <>
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                        Connexion...
                    </>
                ) : (
                    'Se connecter'
                )}
            </Button>
            <Link
                href={login().url}
                className="text-sm text-white/80 underline-offset-2 transition-colors hover:text-disney-gold hover:underline sm:hidden"
            >
                Connexion
            </Link>
        </>
    )}
</Form>
```
**Status:** ⏳ À faire

---

### 3. Backend - Recherche de membres (UserController.php)

Pour que la recherche fonctionne, modifier la méthode `index` :

```php
public function index(Request $request)
{
    $users = User::query()
        ->when($request->search, function ($query, $search) {
            $query->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
        })
        ->get();

    return Inertia::render('members/index', compact('users'));
}
```

N'oublie pas d'ajouter `use Illuminate\Http\Request;` en haut du fichier.

**Status:** ⏳ À faire

---

### 4. Page-Layout (page-layout.tsx) - Optionnel

Améliorer avec un overlay sur l'image de fond pour une meilleure lisibilité :

```tsx
<div className={cn(
    "min-h-screen flex flex-col bg-[url('/assets/images/background.jpg')] bg-cover bg-fixed",
    parentClassName
)}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-disney-blue-dark/30 via-transparent to-disney-blue-dark/50 pointer-events-none" />

    <Header />
    <main className={cn(`flex-1 min-h-0 relative`, className)}>
        {children}
    </main>
</div>
```
**Status:** ⏳ À faire (optionnel)

---

## Points clés

1. **Utiliser `<Form>` d'Inertia** partout, jamais `<form>` HTML
2. **Couleurs Disney** : bleu (#1E3A8A inspiré) et or/doré pour les accents
3. **Glassmorphism** : `bg-white/10`, `backdrop-blur-sm`, `border-white/20`
4. **Animations subtiles** : `transition-all duration-200`, `hover:scale-105`
5. **Inputs arrondis** : `rounded-full` pour un look moderne
6. **Icônes Lucide** : Navigation avec icônes pour une meilleure UX

## Fichiers à modifier

1. ✅ `resources/css/app.css` - Couleurs (fait)
2. ⏳ `resources/js/components/header.tsx` - Refonte visuelle (en cours - menu mobile et formulaire connexion restants)
3. ⏳ `app/Http/Controllers/UserController.php` - Recherche fonctionnelle (à faire)
4. ⏳ `resources/js/layouts/page-layout.tsx` - Overlay (optionnel, à faire)