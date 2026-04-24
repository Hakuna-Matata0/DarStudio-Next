"use client";

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  FileText, 
  Building2, 
  Target, 
  Users, 
  Layout,
  Palette,
  Settings,
  FileEdit,
  Search,
  Wrench,
  Calendar as CalendarIcon,
  Handshake,
  MessageSquare,
  Save,
  Send,
  Globe,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  CheckCircle2,
  Camera,
  Zap
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import * as Switch from "@radix-ui/react-switch";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function BriefPageClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // 1. Informacje o kliencie
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    location: "",
    currentWebsite: "",
    
    // 2. Cele projektu
    projectGoals: [] as string[],
    kpiGoals: "",
    mainCTA: "",
    
    // 3. Grupa docelowa
    idealClient: "",
    ageRange: "",
    gender: "",
    targetLocation: "",
    clientProblems: "",
    clientAwareness: "",
    hasSegments: false,
    segments: "",
    
    // 4. Zakres projektu
    projectType: "",
    numberOfPages: "",
    needsCMS: false,
    additionalFeatures: [] as string[],
    
    // 5. Design i inspiracje
    hasVisualIdentity: "",
    brandColors: "#00E0C6",
    typographyPreferences: "",
    likedWebsites: "",
    dislikedWebsites: "",
    designStyle: [] as string[],
    
    // 6. Funkcjonalności
    requiredForms: [] as string[],
    needsAnimations: false,
    mobileRequirements: "",
    isMultilingual: false,
    needsLogin: false,
    needsSearch: false,
    
    // 7. Treści
    contentProvider: "",
    needsCopywriting: false,
    hasPhotos: "",
    needsStockPhotos: false,
    needsPhotoShoot: false,
    languages: [] as string[],
    
    // 8. SEO i marketing
    needsSEO: false,
    keywords: "",
    needsBlog: false,
    integrations: [] as string[],
    
    // 9. Techniczne
    hasDomain: "",
    hasHosting: "",
    needsSetupHelp: false,
    technicalRequirements: "",
    performancePriority: false,
    
    // 10. Budżet i terminy
    budgetRange: "",
    deadline: undefined as Date | undefined,
    isPhased: "",
    projectPriorities: "",
    
    // 11. Współpraca
    decisionMaker: "",
    teamSize: "",
    preferredCommunication: "",
    updateFrequency: "",
    
    // 12. Dodatkowe informacje
    companyDescription: "",
    whyChooseYou: "",
    competitiveAdvantages: "",
    biggestConcern: "",
    successDefinition: "",
  });

  const steps = [
    { id: 0, title: "Klient", icon: Building2, description: "Dane podstawowe" },
    { id: 1, title: "Cele", icon: Target, description: "Cele biznesowe" },
    { id: 2, title: "Odbiorcy", icon: Users, description: "Grupa docelowa" },
    { id: 3, title: "Zakres", icon: Layout, description: "Typ i funkcje" },
    { id: 4, title: "Design", icon: Palette, description: "Styl wizualny" },
    { id: 5, title: "Funkcje", icon: Settings, description: "Funkcjonalności" },
    { id: 6, title: "Treści", icon: FileEdit, description: "Materiały" },
    { id: 7, title: "SEO", icon: Search, description: "Optymalizacja" },
    { id: 8, title: "Tech", icon: Wrench, description: "Wymagania" },
    { id: 9, title: "Budżet", icon: DollarSign, description: "Finanse" },
    // { id: 10, title: "Zespół", icon: Handshake, description: "Współpraca" },
    { id: 10, title: "Podsumowanie", icon: MessageSquare, description: "Finalizacja" },
  ];

  const industries = [
    "Technologia/IT", "E-commerce", "Usługi B2B", "Medycyna/Zdrowie",
    "Edukacja", "Finanse", "Nieruchomości", "Gastronomia",
    "Moda/Lifestyle", "Sport/Fitness", "Motoryzacja", "Produkcja",
    "Doradztwo", "Marketing/Reklama", "Inna"
  ];

  const goalOptions = ["Sprzedaż", "Generowanie leadów", "Budowanie marki", "Portfolio", "Inne"];
  const additionalFeaturesOptions = ["Blog", "System rezerwacji", "Płatności online", "Integracje CRM", "Integracja newslettera", "Przycisk WhatsApp / Messenger", "Opinie klientów", "Wyszukiwarka", "Mapa Google"];
  const designStyleOptions = ["Nowoczesny", "Minimalistyczny", "Elegancki", "Odważny"];
  const formTypes = ["Kontaktowy", "Wycena", "Quiz"];
  const languageOptions = ["Polski", "Angielski", "Niemiecki", "Francuski", "Hiszpański"];
  const integrationOptions = ["Google Analytics", "Meta Pixel", "Narzędzie email marketingowe", "CRM"];
  
  const budgetRanges = [
    "1000 - 5000 PLN",
    "5 000 - 10 000 PLN",
    "10 000 - 15 000 PLN",
    "Do uzgodnienia"
  ];

  const communicationMethods = [
    "Email", "Telefon", "Video call", "Slack", "Microsoft Teams", "Osobiście"
  ];

  const updateFrequencies = [
    "Codziennie", "2-3 razy w tygodniu", "Raz w tygodniu", "Co dwa tygodnie", "Według potrzeb"
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Dziękujemy! Twój brief został wysłany. Skontaktujemy się wkrótce!");
  };

  const handleSaveForLater = () => {
    localStorage.setItem("briefFormData", JSON.stringify(formData));
    localStorage.setItem("briefCurrentStep", currentStep.toString());
    alert("Brief został zapisany! Możesz wrócić do niego później.");
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF6] overflow-x-hidden relative">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Radial gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(0,224,198,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(11, 18, 32, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              <img src="/logo.svg" alt={`${siteConfig.brandName} logo`} className="h-8 w-8 shrink-0" />
              <span
                style={{
                  background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {siteConfig.brandName}
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleSaveForLater}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: "rgba(18, 26, 43, 0.8)",
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(230, 237, 246, 0.75)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Save className="h-4 w-4" />
                Zapisz
              </motion.button>

              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[#00E0C6]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(230, 237, 246, 0.75)",
                }}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Powrót</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Brief projektu strony internetowej
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(230, 237, 246, 0.7)",
              }}
            >
              Wypełnij szczegółowy brief, aby pomóc nam zrozumieć Twoje potrzeby i stworzyć idealną stronę.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative h-2 rounded-full overflow-hidden mb-2"
              style={{ backgroundColor: "rgba(18, 26, 43, 0.6)" }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #00E0C6, #2E90FA)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between text-xs" style={{ color: "rgba(230, 237, 246, 0.5)" }}>
              <span>Krok {currentStep + 1} z {steps.length}</span>
              <span>{Math.round(progress)}% ukończone</span>
            </div>
          </motion.div>

          {/* Steps Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center px-2">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                
                return (
                  <motion.button
                    key={step.id}
                    onClick={() => setCurrentStep(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 w-[90px]"
                    style={{
                      backgroundColor: isActive 
                        ? "rgba(0, 224, 198, 0.1)" 
                        : isCompleted 
                        ? "rgba(0, 224, 198, 0.05)" 
                        : "rgba(18, 26, 43, 0.4)",
                      borderColor: isActive 
                        ? "#00E0C6" 
                        : isCompleted 
                        ? "rgba(0, 224, 198, 0.3)" 
                        : "rgba(255,255,255,0.05)",
                      border: "1px solid",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: isActive || isCompleted ? "#00E0C6" : "rgba(18, 26, 43, 0.6)",
                      }}
                    >
                      {isCompleted ? (
                        <CheckCircle2
                          className="w-5 h-5"
                          style={{ color: "#0B1220" }}
                        />
                      ) : (
                        <StepIcon
                          className="w-5 h-5"
                          style={{
                            color: isActive ? "#0B1220" : "rgba(230, 237, 246, 0.5)",
                          }}
                        />
                      )}
                    </div>
                    <span
                      className="text-xs font-bold text-center"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: isActive ? "#00E0C6" : isCompleted ? "rgba(0, 224, 198, 0.7)" : "rgba(230, 237, 246, 0.5)",
                      }}
                    >
                      {step.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <motion.div
            className="rounded-2xl border backdrop-blur-sm overflow-hidden"
            style={{
              backgroundColor: "rgba(18, 26, 43, 0.6)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 md:p-10"
              >
                {/* Step 0: Informacje o kliencie */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Informacje o kliencie
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Podstawowe dane kontaktowe i informacje o Twojej firmie.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        label="Nazwa firmy"
                        required
                        icon={Building2}
                      >
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Twoja Firma Sp. z o.o."
                          className="input-field"
                        />
                      </FormField>

                      <FormField
                        label="Osoba kontaktowa"
                        required
                        icon={Users}
                      >
                        <input
                          type="text"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          placeholder="Jan Kowalski"
                          className="input-field"
                        />
                      </FormField>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        label="Email"
                        required
                        icon={Mail}
                      >
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="kontakt@firma.pl"
                          className="input-field"
                        />
                      </FormField>

                      <FormField
                        label="Numer telefonu"
                        required
                        icon={Phone}
                      >
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+48 123 456 789"
                          className="input-field"
                        />
                      </FormField>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        label="Branża"
                        required
                        icon={Target}
                      >
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Wybierz branżę...</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </FormField>

                      {/* <FormField
                        label="Lokalizacja działalności"
                        icon={MapPin}
                      >
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Warszawa, cała Polska"
                          className="input-field"
                        />
                      </FormField> */}
                    </div>

                    <FormField
                      label="Obecna strona internetowa (jeśli posiadasz)"
                      icon={Globe}
                    >
                      <input
                        type="url"
                        value={formData.currentWebsite}
                        onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                        placeholder="https://www.obecnastrona.pl"
                        className="input-field"
                      />
                    </FormField>
                  </div>
                )}

                {/* Step 1: Cele projektu */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Cele projektu
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Określ główne cele biznesowe nowej strony internetowej.
                      </p>
                    </div>

                    <FormField
                      label="Główny cel strony (możesz wybrać wiele)"
                      required
                      icon={Target}
                    >
                      <div className="grid sm:grid-cols-2 gap-3">
                        {goalOptions.map((goal) => (
                          <CheckboxCard
                            key={goal}
                            label={goal}
                            checked={formData.projectGoals.includes(goal)}
                            onChange={() => setFormData({
                              ...formData,
                              projectGoals: toggleArrayItem(formData.projectGoals, goal)
                            })}
                          />
                        ))}
                      </div>
                    </FormField>

                    <FormField
                      label="KPI / Cele biznesowe"
                      required
                      icon={TrendingUp}
                      description="Np. 100 leadów miesięcznie, wzrost sprzedaży o 30%, zwiększenie ruchu o 50%"
                    >
                      <textarea
                        value={formData.kpiGoals}
                        onChange={(e) => setFormData({ ...formData, kpiGoals: e.target.value })}
                        placeholder="Opisz mierzalne cele biznesowe..."
                        rows={4}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <FormField
                      label="Główne call-to-action"
                      required
                      icon={Zap}
                      description="Co chcesz, aby użytkownik zrobił? Np. 'Zamów wycenę', 'Kup teraz', 'Umów spotkanie'"
                    >
                      <input
                        type="text"
                        value={formData.mainCTA}
                        onChange={(e) => setFormData({ ...formData, mainCTA: e.target.value })}
                        placeholder="Zamów bezpłatną wycenę"
                        className="input-field"
                      />
                    </FormField>
                  </div>
                )}

                {/* Step 2: Grupa docelowa */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Grupa docelowa
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Kim są Twoi idealni klienci? Poznaj swoją grupę docelową.
                      </p>
                    </div>

                    <FormField
                      label="Opis idealnego klienta"
                      required
                      icon={Users}
                      description="Kim jest Twój idealny klient? Czym się zajmuje? Jakie ma problemy?"
                    >
                      <textarea
                        value={formData.idealClient}
                        onChange={(e) => setFormData({ ...formData, idealClient: e.target.value })}
                        placeholder="Np. Właściciel małej firmy IT, 30-45 lat, szuka sposobów na automatyzację procesów..."
                        rows={4}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField
                        label="Przedział wiekowy"
                        icon={Users}
                      >
                        <select
                          value={formData.ageRange}
                          onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Wybierz...</option>
                          <option value="18-24">18-24</option>
                          <option value="25-34">25-34</option>
                          <option value="35-44">35-44</option>
                          <option value="45-54">45-54</option>
                          <option value="55-64">55-64</option>
                          <option value="65+">65+</option>
                        </select>
                      </FormField>

                      <FormField
                        label="Płeć"
                      >
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Bez znaczenia</option>
                          <option value="female">Kobiety</option>
                          <option value="male">Mężczyźni</option>
                          <option value="other">Inna</option>
                        </select>
                      </FormField>

                      <FormField
                        label="Lokalizacja"
                        icon={MapPin}
                      >
                        <input
                          type="text"
                          value={formData.targetLocation}
                          onChange={(e) => setFormData({ ...formData, targetLocation: e.target.value })}
                          placeholder="Polska, UE"
                          className="input-field"
                        />
                      </FormField>
                    </div>

                    <FormField
                      label="Problemy i potrzeby klientów"
                      required
                      icon={MessageSquare}
                      description="Jakie problemy rozwiązujesz? Jakie potrzeby zaspokajasz?"
                    >
                      <textarea
                        value={formData.clientProblems}
                        onChange={(e) => setFormData({ ...formData, clientProblems: e.target.value })}
                        placeholder="Np. Brak czasu na marketing, trudności z pozyskiwaniem klientów online..."
                        rows={4}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <FormField
                      label="Poziom świadomości klienta"
                      icon={Target}
                      description="Jak dobrze Twoi klienci znają swój problem i Twoje rozwiązanie?"
                    >
                      <select
                        value={formData.clientAwareness}
                        onChange={(e) => setFormData({ ...formData, clientAwareness: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Wybierz poziom...</option>
                        <option value="unaware">Nieświadomi problemu</option>
                        <option value="problem-aware">Świadomi problemu</option>
                        <option value="solution-aware">Świadomi rozwiązania</option>
                        <option value="product-aware">Świadomi produktu</option>
                        <option value="most-aware">Najbardziej świadomi</option>
                      </select>
                    </FormField>

                    <div className="space-y-4">
                      <ToggleField
                        label="Czy są różne segmenty klientów?"
                        checked={formData.hasSegments}
                        onChange={(checked) => setFormData({ ...formData, hasSegments: checked })}
                      />

                      {formData.hasSegments && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <FormField
                            label="Opisz segmenty"
                          >
                            <textarea
                              value={formData.segments}
                              onChange={(e) => setFormData({ ...formData, segments: e.target.value })}
                              placeholder="Np. Segment A: Młode startupy, Segment B: Średnie firmy..."
                              rows={3}
                              className="input-field resize-none"
                            />
                          </FormField>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Zakres projektu */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Zakres projektu
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Jaki typ strony potrzebujesz i jakie funkcje są wymagane?
                      </p>
                    </div>

                    <FormField
                      label="Typ strony"
                      required
                      icon={Layout}
                    >
                      <RadioGroup.Root
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                        className="space-y-3"
                      >
                        <RadioCard value="landing" label="Landing page" description="Jedna strona promocyjna" icon={FileText} />
                        <RadioCard value="corporate" label="Strona wizytówka" description="Wielostronicowa witryna korporacyjna" icon={Building2} />
                        <RadioCard value="corporate" label="Strona firmowa" description="Wielostronicowa witryna korporacyjna" icon={Building2} />
                        <RadioCard value="ecommerce" label="Blog" description="Platforma blogwa" icon={ShoppingCart} />
                        <RadioCard value="ecommerce" label="Inne" description="Rozwiązanie szyte na miarę" icon={ShoppingCart} />
                      </RadioGroup.Root>
                    </FormField>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        label="Szacowana liczba podstron"
                        icon={FileText}
                      >
                        <input
                          type="number"
                          value={formData.numberOfPages}
                          onChange={(e) => setFormData({ ...formData, numberOfPages: e.target.value })}
                          placeholder="np. 7"
                          min="1"
                          className="input-field"
                        />
                      </FormField>

                      <div className="flex items-end">
                        <ToggleField
                          label="Potrzebny CMS?"
                          description="System zarządzania treścią"
                          checked={formData.needsCMS}
                          onChange={(checked) => setFormData({ ...formData, needsCMS: checked })}
                        />
                      </div>
                    </div>

                    <FormField
                      label="Dodatkowe funkcjonalności"
                      icon={Sparkles}
                    >
                      <div className="grid sm:grid-cols-2 gap-3">
                        {additionalFeaturesOptions.map((feature) => (
                          <CheckboxCard
                            key={feature}
                            label={feature}
                            checked={formData.additionalFeatures.includes(feature)}
                            onChange={() => setFormData({
                              ...formData,
                              additionalFeatures: toggleArrayItem(formData.additionalFeatures, feature)
                            })}
                          />
                        ))}
                      </div>
                    </FormField>
                  </div>
                )}

                {/* Step 4: Design i inspiracje */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Design i inspiracje
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Określ preferencje wizualne i styl projektowy.
                      </p>
                    </div>

                    <FormField
                      label="Czy istnieje identyfikacja wizualna?"
                      required
                      icon={Palette}
                    >
                      <RadioGroup.Root
                        value={formData.hasVisualIdentity}
                        onValueChange={(value) => setFormData({ ...formData, hasVisualIdentity: value })}
                        className="flex gap-4"
                      >
                        <RadioButton value="yes" label="Tak, mamy logo i brandbook" />
                        <RadioButton value="partial" label="Częściowo" />
                        <RadioButton value="no" label="Nie, potrzebujemy" />
                      </RadioGroup.Root>
                    </FormField>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        label="Kolory marki"
                        icon={Palette}
                        description="Główny kolor marki"
                      >
                        <div className="flex gap-3 items-center">
                          <input
                            type="color"
                            value={formData.brandColors}
                            onChange={(e) => setFormData({ ...formData, brandColors: e.target.value })}
                            className="w-16 h-12 rounded-lg border-2 cursor-pointer"
                            style={{ borderColor: "rgba(255,255,255,0.1)" }}
                          />
                          <input
                            type="text"
                            value={formData.brandColors}
                            onChange={(e) => setFormData({ ...formData, brandColors: e.target.value })}
                            placeholder="#00E0C6"
                            className="input-field flex-1"
                          />
                        </div>
                      </FormField>

                      <FormField
                        label="Preferencje typografii"
                        description="Np. nowoczesna, elegancka, bold"
                      >
                        <input
                          type="text"
                          value={formData.typographyPreferences}
                          onChange={(e) => setFormData({ ...formData, typographyPreferences: e.target.value })}
                          placeholder="Nowoczesna, czytelna"
                          className="input-field"
                        />
                      </FormField>
                    </div>

                    <FormField
                      label="Preferowany styl"
                      icon={Sparkles}
                    >
                      <div className="grid sm:grid-cols-2 gap-3">
                        {designStyleOptions.map((style) => (
                          <CheckboxCard
                            key={style}
                            label={style}
                            checked={formData.designStyle.includes(style)}
                            onChange={() => setFormData({
                              ...formData,
                              designStyle: toggleArrayItem(formData.designStyle, style)
                            })}
                          />
                        ))}
                      </div>
                    </FormField>

                    <FormField
                      label="Strony, które się podobają"
                      icon={Globe}
                      description="Podaj linki do stron, które Ci się podobają (każdy w nowej linii)"
                    >
                      <textarea
                        value={formData.likedWebsites}
                        onChange={(e) => setFormData({ ...formData, likedWebsites: e.target.value })}
                        placeholder="https://przyklad1.com&#10;https://przyklad2.com"
                        rows={3}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <FormField
                      label="Strony, które się nie podobają"
                      icon={Globe}
                      description="Podaj linki do stron, których stylu chcesz uniknąć"
                    >
                      <textarea
                        value={formData.dislikedWebsites}
                        onChange={(e) => setFormData({ ...formData, dislikedWebsites: e.target.value })}
                        placeholder="https://przyklad1.com&#10;https://przyklad2.com"
                        rows={3}
                        className="input-field resize-none"
                      />
                    </FormField>
                  </div>
                )}

                {/* Step 5: Funkcjonalności */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Funkcjonalności
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Jakie funkcje musi mieć Twoja strona?
                      </p>
                    </div>

                    <FormField
                      label="Wymagane formularze"
                      icon={FileText}
                    >
                      <div className="grid sm:grid-cols-3 gap-3">
                        {formTypes.map((formType) => (
                          <CheckboxCard
                            key={formType}
                            label={formType}
                            checked={formData.requiredForms.includes(formType)}
                            onChange={() => setFormData({
                              ...formData,
                              requiredForms: toggleArrayItem(formData.requiredForms, formType)
                            })}
                          />
                        ))}
                      </div>
                    </FormField>

                    <div className="grid md:grid-cols-2 gap-6">
                      <ToggleField
                        label="Animacje"
                        description="Efekty scrollowania, przejścia"
                        checked={formData.needsAnimations}
                        onChange={(checked) => setFormData({ ...formData, needsAnimations: checked })}
                      />

                      <ToggleField
                        label="Wielojęzyczność"
                        description="Wersje językowe strony"
                        checked={formData.isMultilingual}
                        onChange={(checked) => setFormData({ ...formData, isMultilingual: checked })}
                      />

                      {/* <ToggleField
                        label="Logowanie / Panel klienta"
                        description="System kont użytkowników"
                        checked={formData.needsLogin}
                        onChange={(checked) => setFormData({ ...formData, needsLogin: checked })}
                      /> */}

                      <ToggleField
                        label="Wyszukiwarka"
                        description="Wyszukiwanie po stronie"
                        checked={formData.needsSearch}
                        onChange={(checked) => setFormData({ ...formData, needsSearch: checked })}
                      />
                    </div>

                    <FormField
                      label="Wymagania mobilne"
                      icon={Settings}
                      description="Specjalne wymagania dla wersji mobilnej"
                    >
                      <textarea
                        value={formData.mobileRequirements}
                        onChange={(e) => setFormData({ ...formData, mobileRequirements: e.target.value })}
                        placeholder="Np. Mobile-first, aplikacja PWA, specjalne menu mobilne..."
                        rows={3}
                        className="input-field resize-none"
                      />
                    </FormField>
                  </div>
                )}

                {/* Step 6: Treści */}
                {currentStep === 6 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Treści
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Kto dostarczy treści tekstowe i wizualne?
                      </p>
                    </div>

                    <FormField
                      label="Kto dostarcza treści?"
                      required
                      icon={FileEdit}
                    >
                      <RadioGroup.Root
                        value={formData.contentProvider}
                        onValueChange={(value) => setFormData({ ...formData, contentProvider: value })}
                        className="space-y-3"
                      >
                        <RadioCard value="client" label="Klient" description="Dostarczymy gotowe teksty" icon={Users} />
                        <RadioCard value="agency" label="Agencja" description="Potrzebujemy pomocy w tworzeniu treści" icon={FileEdit} />
                        <RadioCard value="mixed" label="Wspólnie" description="Część nasza, część Wasza" icon={Handshake} />
                      </RadioGroup.Root>
                    </FormField>

                    <div className="grid md:grid-cols-2 gap-6">
                      <ToggleField
                        label="Potrzebny copywriting?"
                        description="Profesjonalne teksty sprzedażowe"
                        checked={formData.needsCopywriting}
                        onChange={(checked) => setFormData({ ...formData, needsCopywriting: checked })}
                      />

                      <ToggleField
                        label="Potrzebne zdjęcia stockowe?"
                        description="Zdjęcia z banków zdjęć"
                        checked={formData.needsStockPhotos}
                        onChange={(checked) => setFormData({ ...formData, needsStockPhotos: checked })}
                      />

                      {/* <ToggleField
                        label="Potrzebna sesja zdjęciowa?"
                        description="Profesjonalne zdjęcia produktów/zespołu"
                        checked={formData.needsPhotoShoot}
                        onChange={(checked) => setFormData({ ...formData, needsPhotoShoot: checked })}
                      /> */}
                    </div>

                    <FormField
                      label="Czy są dostępne zdjęcia?"
                      required
                      icon={Camera}
                    >
                      <RadioGroup.Root
                        value={formData.hasPhotos}
                        onValueChange={(value) => setFormData({ ...formData, hasPhotos: value })}
                        className="flex gap-4 flex-wrap"
                      >
                        <RadioButton value="yes" label="Tak, mamy" />
                        <RadioButton value="partial" label="Częściowo" />
                        <RadioButton value="no" label="Nie mamy" />
                      </RadioGroup.Root>
                    </FormField>

                    <FormField
                      label="Języki strony"
                      icon={Globe}
                    >
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {languageOptions.map((lang) => (
                          <CheckboxCard
                            key={lang}
                            label={lang}
                            checked={formData.languages.includes(lang)}
                            onChange={() => setFormData({
                              ...formData,
                              languages: toggleArrayItem(formData.languages, lang)
                            })}
                          />
                        ))}
                      </div>
                    </FormField>
                  </div>
                )}

                {/* Step 7: SEO i marketing */}
                {currentStep === 7 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        SEO i marketing
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Optymalizacja pod wyszukiwarki i narzędzia marketingowe.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <ToggleField
                        label="Potrzebna optymalizacja SEO?"
                        description="Pozycjonowanie w Google"
                        checked={formData.needsSEO}
                        onChange={(checked) => setFormData({ ...formData, needsSEO: checked })}
                      />

                      <ToggleField
                        label="Czy planowany jest blog?"
                        description="Sekcja z artykułami"
                        checked={formData.needsBlog}
                        onChange={(checked) => setFormData({ ...formData, needsBlog: checked })}
                      />
                    </div>

                    {formData.needsSEO && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <FormField
                          label="Słowa kluczowe"
                          icon={Search}
                          description="Najważniejsze frazy, na które chcesz być znaleziony"
                        >
                          <textarea
                            value={formData.keywords}
                            onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                            placeholder="Np. tworzenie stron www, agencja webowa Warszawa, projektowanie UX..."
                            rows={3}
                            className="input-field resize-none"
                          />
                        </FormField>
                      </motion.div>
                    )}

                    <FormField
                      label="Integracje"
                      icon={Settings}
                      description="Narzędzia analityczne i marketingowe"
                    >
                      <div className="grid sm:grid-cols-2 gap-3">
                        {integrationOptions.map((integration) => (
                          <CheckboxCard
                            key={integration}
                            label={integration}
                            checked={formData.integrations.includes(integration)}
                            onChange={() => setFormData({
                              ...formData,
                              integrations: toggleArrayItem(formData.integrations, integration)
                            })}
                          />
                        ))}
                      </div>
                    </FormField>
                  </div>
                )}

                {/* Step 8: Techniczne */}
                {currentStep === 8 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Wymagania techniczne
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Infrastruktura i kwestie techniczne.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        label="Czy domena jest dostępna?"
                        required
                        icon={Globe}
                      >
                        <RadioGroup.Root
                          value={formData.hasDomain}
                          onValueChange={(value) => setFormData({ ...formData, hasDomain: value })}
                          className="flex gap-4"
                        >
                          <RadioButton value="yes" label="Tak" />
                          <RadioButton value="no" label="Nie" />
                        </RadioGroup.Root>
                      </FormField>

                      <FormField
                        label="Czy hosting jest dostępny?"
                        required
                        icon={Wrench}
                      >
                        <RadioGroup.Root
                          value={formData.hasHosting}
                          onValueChange={(value) => setFormData({ ...formData, hasHosting: value })}
                          className="flex gap-4"
                        >
                          <RadioButton value="yes" label="Tak" />
                          <RadioButton value="no" label="Nie" />
                        </RadioGroup.Root>
                      </FormField>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <ToggleField
                        label="Potrzebna pomoc w konfiguracji?"
                        description="Domena, hosting, SSL, DNS"
                        checked={formData.needsSetupHelp}
                        onChange={(checked) => setFormData({ ...formData, needsSetupHelp: checked })}
                      />

                      <ToggleField
                        label="Wydajność / szybkość - wysoki priorytet"
                        description="Optymalizacja pod maksymalną szybkość"
                        checked={formData.performancePriority}
                        onChange={(checked) => setFormData({ ...formData, performancePriority: checked })}
                      />
                    </div>

                    <FormField
                      label="Wymagania techniczne"
                      icon={Settings}
                      description="Specjalne wymagania techniczne lub integracje"
                    >
                      <textarea
                        value={formData.technicalRequirements}
                        onChange={(e) => setFormData({ ...formData, technicalRequirements: e.target.value })}
                        placeholder="Np. Integracja z ERP, API płatności, specyficzne zabezpieczenia..."
                        rows={4}
                        className="input-field resize-none"
                      />
                    </FormField>
                  </div>
                )}

                {/* Step 9: Budżet i terminy */}
                {currentStep === 9 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Budżet i terminy
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Ramy finansowe i czasowe projektu.
                      </p>
                    </div>

                    <FormField
                      label="Zakres budżetu"
                      required
                      icon={DollarSign}
                    >
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Wybierz zakres...</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField
                      label="Deadline"
                      required
                      icon={CalendarIcon}
                      description="Kiedy strona musi być gotowa?"
                    >
                      <input
                        type="date"
                        value={formData.deadline ? formData.deadline.toISOString().split('T')[0] : ''}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value ? new Date(e.target.value) : undefined })}
                        className="input-field"
                        style={{ colorScheme: "dark" }}
                      />
                    </FormField>

                    <FormField
                      label="Czy projekt będzie etapowany?"
                      icon={Target}
                    >
                      <RadioGroup.Root
                        value={formData.isPhased}
                        onValueChange={(value) => setFormData({ ...formData, isPhased: value })}
                        className="flex gap-4"
                      >
                        <RadioButton value="yes" label="Tak, etapami" />
                        <RadioButton value="no" label="Nie, całość naraz" />
                      </RadioGroup.Root>
                    </FormField>

                    <FormField
                      label="Priorytety projektu"
                      icon={Target}
                      description="Co jest najważniejsze? Np. szybka realizacja, jakość, cena"
                    >
                      <textarea
                        value={formData.projectPriorities}
                        onChange={(e) => setFormData({ ...formData, projectPriorities: e.target.value })}
                        placeholder="Np. Najważniejsza jest jakość wykonania, termin może być elastyczny..."
                        rows={3}
                        className="input-field resize-none"
                      />
                    </FormField>
                  </div>
                )}

                {/* Step 10: Współpraca */}
                {/* {currentStep === 10 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Współpraca
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Jak będzie wyglądać nasza wspólna praca?
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        label="Osoba decyzyjna"
                        required
                        icon={Users}
                        description="Kto podejmuje ostateczne decyzje?"
                      >
                        <input
                          type="text"
                          value={formData.decisionMaker}
                          onChange={(e) => setFormData({ ...formData, decisionMaker: e.target.value })}
                          placeholder="Jan Kowalski - CEO"
                          className="input-field"
                        />
                      </FormField>

                      <FormField
                        label="Liczba osób zaangażowanych"
                        icon={Users}
                        description="Po stronie klienta"
                      >
                        <input
                          type="number"
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          placeholder="3"
                          min="1"
                          className="input-field"
                        />
                      </FormField>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        label="Preferowany sposób komunikacji"
                        required
                        icon={MessageSquare}
                      >
                        <select
                          value={formData.preferredCommunication}
                          onChange={(e) => setFormData({ ...formData, preferredCommunication: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Wybierz...</option>
                          {communicationMethods.map((method) => (
                            <option key={method} value={method}>
                              {method}
                            </option>
                          ))}
                        </select>
                      </FormField>

                      <FormField
                        label="Częstotliwość aktualizacji"
                        required
                        icon={CalendarIcon}
                      >
                        <select
                          value={formData.updateFrequency}
                          onChange={(e) => setFormData({ ...formData, updateFrequency: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Wybierz...</option>
                          {updateFrequencies.map((freq) => (
                            <option key={freq} value={freq}>
                              {freq}
                            </option>
                          ))}
                        </select>
                      </FormField>
                    </div>
                  </div>
                )} */}

                {/* Step 11: Dodatkowe informacje */}
                {currentStep === 10 && (
                  <div className="space-y-6">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                        Dodatkowe informacje
                      </h2>
                      <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                        Ostatnie pytania, które pomogą nam lepiej zrozumieć Twój biznes.
                      </p>
                    </div>

                    <FormField
                      label="Opisz swoją firmę w 2-3 zdaniach"
                      required
                      icon={Building2}
                      description="Kim jesteście? Czym się zajmujecie?"
                    >
                      <textarea
                        value={formData.companyDescription}
                        onChange={(e) => setFormData({ ...formData, companyDescription: e.target.value })}
                        placeholder="Jesteśmy innowacyjną firmą technologiczną, która od 10 lat pomaga małym i średnim przedsiębiorstwom w cyfrowej transformacji..."
                        rows={4}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <FormField
                      label="Dlaczego klient ma wybrać Ciebie?"
                      required
                      icon={Target}
                      description="Co wyróżnia Cię na tle konkurencji?"
                    >
                      <textarea
                        value={formData.whyChooseYou}
                        onChange={(e) => setFormData({ ...formData, whyChooseYou: e.target.value })}
                        placeholder="Oferujemy najszybszy czas realizacji w branży przy zachowaniu najwyższej jakości..."
                        rows={4}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <FormField
                      label="Przewagi konkurencyjne"
                      icon={Zap}
                      description="Co robisz lepiej niż konkurencja?"
                    >
                      <textarea
                        value={formData.competitiveAdvantages}
                        onChange={(e) => setFormData({ ...formData, competitiveAdvantages: e.target.value })}
                        placeholder="Np. Certyfikowani specjaliści, 24/7 wsparcie, unikalna technologia..."
                        rows={3}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <FormField
                      label="Największa obawa związana z projektem"
                      icon={MessageSquare}
                      description="Co Cię niepokoi? Pomożemy to rozwiązać."
                    >
                      <textarea
                        value={formData.biggestConcern}
                        onChange={(e) => setFormData({ ...formData, biggestConcern: e.target.value })}
                        placeholder="Np. Przekroczenie budżetu, opóźnienia, brak komunikacji..."
                        rows={3}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <FormField
                      label="Jak wygląda sukces tego projektu?"
                      required
                      icon={Target}
                      description="Co chcesz osiągnąć? Jakie będą oznaki sukcesu?"
                    >
                      <textarea
                        value={formData.successDefinition}
                        onChange={(e) => setFormData({ ...formData, successDefinition: e.target.value })}
                        placeholder="Sukces to 50% wzrost konwersji, profesjonalny wizerunek marki i pozytywne opinie klientów..."
                        rows={4}
                        className="input-field resize-none"
                      />
                    </FormField>

                    <div className="mt-8 p-6 rounded-xl border" style={{
                      backgroundColor: "rgba(0, 224, 198, 0.05)",
                      borderColor: "rgba(0, 224, 198, 0.2)",
                    }}>
                      <div className="flex gap-3 items-start">
                        <Sparkles className="w-6 h-6 text-[#00E0C6] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-[#00E0C6]">
                            Świetnie! Już prawie gotowe
                          </h3>
                          <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.8)" }}>
                            Po kliknięciu "Wyślij brief" otrzymam wszystkie informacje i skontaktuję się z Tobą w ciągu 24 godzin z propozycją współpracy i szczegółową ofertą dopasowaną do Twoich potrzeb.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <motion.button
                onClick={handlePrev}
                disabled={currentStep === 0}
                whileHover={currentStep > 0 ? { scale: 1.02, x: -5 } : {}}
                whileTap={currentStep > 0 ? { scale: 0.98 } : {}}
                className="flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "rgba(18, 26, 43, 0.8)",
                  color: "#E6EDF6",
                }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Wstecz</span>
              </motion.button>

              {currentStep < steps.length - 1 ? (
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-bold transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                    color: "#0B1220",
                  }}
                >
                  <span>Dalej</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-bold transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                    color: "#0B1220",
                    boxShadow: "0 10px 40px rgba(0,224,198,0.3)",
                  }}
                >
                  <Send className="w-5 h-5" />
                  <span>Wyślij brief</span>
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255,255,255,0.1);
          background-color: rgba(11, 18, 32, 0.8);
          color: #E6EDF6;
          font-family: var(--font-body);
          transition: all 0.3s;
          outline: none;
        }

        .input-field:focus {
          border-color: #00E0C6;
          box-shadow: 0 0 0 3px rgba(0, 224, 198, 0.1);
        }

        .input-field::placeholder {
          color: rgba(230, 237, 246, 0.4);
        }

        .input-field:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

// Reusable Components

function FormField({ 
  label, 
  children, 
  icon: Icon, 
  required, 
  description 
}: { 
  label: string; 
  children: React.ReactNode; 
  icon?: any; 
  required?: boolean;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#00E0C6" }}>
        {Icon && <Icon className="w-4 h-4" />}
        {label}
        {required && <span className="text-[#2E90FA]">*</span>}
      </label>
      {description && (
        <p className="text-xs" style={{ color: "rgba(230, 237, 246, 0.5)" }}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

function CheckboxCard({ 
  label, 
  checked, 
  onChange 
}: { 
  label: string; 
  checked: boolean; 
  onChange: () => void; 
}) {
  return (
    <motion.button
      type="button"
      onClick={onChange}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 text-left"
      style={{
        backgroundColor: checked
          ? "rgba(0, 224, 198, 0.1)"
          : "rgba(18, 26, 43, 0.6)",
        borderColor: checked
          ? "#00E0C6"
          : "rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="w-5 h-5 rounded border flex items-center justify-center flex-shrink-0"
        style={{
          borderColor: checked ? "#00E0C6" : "rgba(255,255,255,0.2)",
          backgroundColor: checked ? "#00E0C6" : "transparent",
        }}
      >
        {checked && <Check className="w-3 h-3 text-[#0B1220]" />}
      </div>
      <span className="text-sm font-medium" style={{ color: "#E6EDF6" }}>
        {label}
      </span>
    </motion.button>
  );
}

function RadioCard({ 
  value, 
  label, 
  description, 
  icon: Icon 
}: { 
  value: string; 
  label: string; 
  description: string; 
  icon?: any; 
}) {
  return (
    <RadioGroup.Item value={value} asChild>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer data-[state=checked]:bg-[rgba(0,224,198,0.1)] data-[state=checked]:border-[#00E0C6]"
        style={{
          backgroundColor: "rgba(18, 26, 43, 0.6)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-center justify-center w-5 h-5 mt-0.5">
          <div
            className="w-5 h-5 rounded-full border flex items-center justify-center data-[state=checked]:border-[#00E0C6]"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <RadioGroup.Indicator className="w-2.5 h-2.5 rounded-full bg-[#00E0C6]" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {Icon && <Icon className="w-5 h-5 text-[#00E0C6]" />}
            <h4 className="font-semibold" style={{ color: "#E6EDF6" }}>
              {label}
            </h4>
          </div>
          <p className="text-sm" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
            {description}
          </p>
        </div>
      </motion.div>
    </RadioGroup.Item>
  );
}

function RadioButton({ 
  value, 
  label 
}: { 
  value: string; 
  label: string; 
}) {
  return (
    <RadioGroup.Item value={value} asChild>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-300 cursor-pointer data-[state=checked]:bg-[rgba(0,224,198,0.1)] data-[state=checked]:border-[#00E0C6]"
        style={{
          backgroundColor: "rgba(18, 26, 43, 0.6)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="w-4 h-4 rounded-full border flex items-center justify-center data-[state=checked]:border-[#00E0C6]"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          <RadioGroup.Indicator className="w-2 h-2 rounded-full bg-[#00E0C6]" />
        </div>
        <span className="text-sm font-medium" style={{ color: "#E6EDF6" }}>
          {label}
        </span>
      </motion.div>
    </RadioGroup.Item>
  );
}

function ToggleField({ 
  label, 
  description, 
  checked, 
  onChange 
}: { 
  label: string; 
  description?: string; 
  checked: boolean; 
  onChange: (checked: boolean) => void; 
}) {
  return (
    <div
      className="flex items-start justify-between p-4 rounded-xl border transition-all duration-300"
      style={{
        backgroundColor: checked ? "rgba(0, 224, 198, 0.05)" : "rgba(18, 26, 43, 0.4)",
        borderColor: checked ? "rgba(0, 224, 198, 0.2)" : "rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex-1">
        <label htmlFor={label} className="font-medium cursor-pointer block mb-1" style={{ color: "#E6EDF6" }}>
          {label}
        </label>
        {description && (
          <p className="text-xs" style={{ color: "rgba(230, 237, 246, 0.5)" }}>
            {description}
          </p>
        )}
      </div>
      <Switch.Root
        id={label}
        checked={checked}
        onCheckedChange={onChange}
        className="relative w-11 h-6 rounded-full transition-all duration-300 data-[state=checked]:bg-[#00E0C6]"
        style={{
          backgroundColor: checked ? "#00E0C6" : "rgba(255,255,255,0.1)",
        }}
      >
        <Switch.Thumb
          className="block w-5 h-5 rounded-full transition-transform duration-300 translate-x-0.5 data-[state=checked]:translate-x-[22px]"
          style={{ backgroundColor: "#fff" }}
        />
      </Switch.Root>
    </div>
  );
}
