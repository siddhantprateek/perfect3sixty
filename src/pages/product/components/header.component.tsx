import React, { useState } from 'react';
import { Hand, X } from 'lucide-react';
import { UserProfile } from '../yara.pages';

interface HeaderProps {
  onUpdateProfile: (profile: UserProfile) => void;
}

const Header: React.FC<HeaderProps> = ({ onUpdateProfile }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    face_shape: "oval",
    skin_type: "combination",
    skin_concerns: ["acne", "dark spots"],
    hair_texture: "wavy",
    style_preferences: ["natural", "minimalist"],
    budget_range: "mid-range",
    allergies: ["fragrance"],
    preferred_brands: ["The Ordinary", "Cerave"]
  });

  const handleSave = () => {
    onUpdateProfile(profile);
    setIsDialogOpen(false);
  };

  const handleMultiSelect = (field: keyof UserProfile, value: string) => {
    const currentValues = profile[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    setProfile({ ...profile, [field]: newValues });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-900 text-white p-2 rounded-lg">
            <Hand size={20} />
          </div>
          <span className="text-sm font-medium">Yara</span>
        </div>
        <button 
          onClick={() => setIsDialogOpen(true)} 
          className="p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Personalization Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Personalize Your Experience</h2>
              <button 
                onClick={() => setIsDialogOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Face Shape */}
              <div>
                <label className="block text-sm font-medium mb-2">Face Shape</label>
                <select 
                  value={profile.face_shape}
                  onChange={e => setProfile({ ...profile, face_shape: e.target.value })}
                  className="w-full bg-transparent p-2 border rounded-lg"
                >
                  {['oval', 'round', 'square', 'heart', 'diamond'].map(shape => (
                    <option key={shape} value={shape}>{shape.charAt(0).toUpperCase() + shape.slice(1)}</option>
                  ))}
                </select>
              </div>

              {/* Skin Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Skin Type</label>
                <select 
                  value={profile.skin_type}
                  onChange={e => setProfile({ ...profile, skin_type: e.target.value })}
                  className="w-full bg-transparent p-2 border rounded-lg"
                >
                  {['oily', 'dry', 'combination', 'normal', 'sensitive'].map(type => (
                    <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                  ))}
                </select>
              </div>

              {/* Skin Concerns */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Skin Concerns</label>
                <div className="flex flex-wrap gap-2">
                  {['acne', 'dark spots', 'aging', 'redness', 'dryness'].map(concern => (
                    <button
                      key={concern}
                      onClick={() => handleMultiSelect('skin_concerns', concern)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        profile.skin_concerns.includes(concern)
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Texture */}
              <div>
                <label className="block text-sm font-medium mb-2">Hair Texture</label>
                <select 
                  value={profile.hair_texture}
                  onChange={e => setProfile({ ...profile, hair_texture: e.target.value })}
                  className="w-full bg-transparent p-2 border rounded-lg"
                >
                  {['straight', 'wavy', 'curly', 'coily'].map(texture => (
                    <option key={texture} value={texture}>{texture.charAt(0).toUpperCase() + texture.slice(1)}</option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select 
                  value={profile.budget_range}
                  onChange={e => setProfile({ ...profile, budget_range: e.target.value })}
                  className="w-full bg-transparent p-2 border rounded-lg"
                >
                  {['budget', 'mid-range', 'luxury'].map(range => (
                    <option key={range} value={range}>{range.charAt(0).toUpperCase() + range.slice(1)}</option>
                  ))}
                </select>
              </div>

              {/* Style Preferences */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Style Preferences</label>
                <div className="flex flex-wrap gap-2">
                  {['natural', 'minimalist', 'bold', 'glamorous', 'classic'].map(style => (
                    <button
                      key={style}
                      onClick={() => handleMultiSelect('style_preferences', style)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        profile.style_preferences.includes(style)
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Brands */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Preferred Brands</label>
                <div className="flex flex-wrap gap-2">
                  {['The Ordinary', 'Cerave', 'La Roche-Posay', 'Neutrogena', 'No Preference'].map(brand => (
                    <button
                      key={brand}
                      onClick={() => handleMultiSelect('preferred_brands', brand)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        profile.preferred_brands.includes(brand)
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;